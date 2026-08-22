/* =========================================================
   OWNER PORTAL
========================================================= */

const SUPABASE_URL =
  "https://sjpppwvjbvltuidutxkd.supabase.co";


const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_dWP9JhycYoBY_TnICJKIeA_IN8m4E4z";


const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {

        persistSession: true,

        autoRefreshToken: true

      }
    }
  );


let adminUser =
  null;


let allOrders =
  [];


const adminAccess =
  document.getElementById(
    "adminAccess"
  );


const adminDashboard =
  document.getElementById(
    "adminDashboard"
  );


const adminOrders =
  document.getElementById(
    "adminOrders"
  );


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


function formatPrice(
  value
) {

  return new Intl.NumberFormat(
    "en-US",
    {

      style:
        "currency",

      currency:
        "USD"

    }
  ).format(
    Number(value) || 0
  );

}


function showToast(
  message
) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },

    3000
  );

}


/* =========================================================
   VERIFY ADMIN
========================================================= */

async function verifyAdministrator() {

  const {
    data:
      sessionData,

    error:
      sessionError
  } =
    await supabaseClient.auth
      .getSession();


  if (
    sessionError ||
    !sessionData.session
  ) {

    adminAccess.innerHTML = `

      <span class="eyebrow">
        Owner Portal
      </span>

      <h1>
        Administrator Login Required
      </h1>

      <p>
        Log in through the main website using the
        administrator account, then return to this URL.
      </p>

      <a
        class="button button-primary"
        href="/"
      >
        Go to Website
      </a>

    `;


    return false;

  }


  adminUser =
    sessionData.session.user;


  const {
    data:
      profile,

    error:
      profileError
  } =
    await supabaseClient

      .from(
        "profiles"
      )

      .select(
        "id, full_name, role"
      )

      .eq(
        "id",
        adminUser.id
      )

      .single();


  if (
    profileError ||
    !profile ||
    profile.role !==
      "admin"
  ) {

    adminAccess.innerHTML = `

      <span class="eyebrow">
        Access Denied
      </span>

      <h1>
        Administrator Permission Required
      </h1>

      <p>
        This account does not have permission to
        access the owner dashboard.
      </p>

      <a
        class="button button-secondary"
        href="/"
      >
        Return to Website
      </a>

    `;


    return false;

  }


  adminAccess.classList.add(
    "hidden"
  );


  adminDashboard.classList.remove(
    "hidden"
  );


  document.getElementById(
    "adminEmail"
  ).textContent =
    adminUser.email;


  return true;

}


/* =========================================================
   LOAD ORDERS
========================================================= */

async function loadOrders() {

  adminOrders.innerHTML = `

    <article class="admin-order-card glass-card">
      Loading orders...
    </article>

  `;


  const {
    data,
    error
  } =
    await supabaseClient

      .from(
        "orders"
      )

      .select(`
        id,
        user_id,
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        shipping_address,
        shipping_address_2,
        shipping_city,
        shipping_state,
        shipping_zip,
        shipping_country,
        delivery_instructions,
        payment_method,
        payment_status,
        subtotal,
        shipping,
        tax,
        total,
        status,
        created_at,
        order_items(
          id,
          product_name,
          strength,
          quantity,
          unit_price,
          line_total
        )
      `)

      .order(
        "created_at",
        {
          ascending:
            false
        }
      );


  if (
    error
  ) {

    console.error(
      error
    );


    adminOrders.innerHTML = `

      <article class="admin-order-card glass-card">

        Unable to load orders.

        <br><br>

        ${escapeHTML(error.message)}

      </article>

    `;


    return;

  }


  allOrders =
    data || [];


  updateStatistics();


  renderOrders();

}


/* =========================================================
   STATISTICS
========================================================= */

function updateStatistics() {

  const pending =
    allOrders.filter(
      order =>
        order.status ===
        "Pending"
    ).length;


  const processing =
    allOrders.filter(
      order =>
        order.status ===
        "Processing"
    ).length;


  const revenue =
    allOrders

      .filter(
        order =>
          order.status !==
          "Cancelled"
      )

      .reduce(
        (
          sum,
          order
        ) =>

          sum +
          Number(
            order.total
          ),

        0
      );


  document.getElementById(
    "totalOrders"
  ).textContent =
    allOrders.length;


  document.getElementById(
    "pendingOrders"
  ).textContent =
    pending;


  document.getElementById(
    "processingOrders"
  ).textContent =
    processing;


  document.getElementById(
    "totalRevenue"
  ).textContent =
    formatPrice(
      revenue
    );

}


/* =========================================================
   FILTER ORDERS
========================================================= */

function getFilteredOrders() {

  const search =
    document.getElementById(
      "adminSearch"
    )
      .value
      .trim()
      .toLowerCase();


  const status =
    document.getElementById(
      "adminStatusFilter"
    ).value;


  return allOrders.filter(
    order => {

      const searchText =

        `${order.order_number || ""}
         ${order.customer_name || ""}
         ${order.customer_email || ""}
         ${order.customer_phone || ""}`

          .toLowerCase();


      const searchMatch =

        !search ||

        searchText.includes(
          search
        );


      const statusMatch =

        status ===
          "all" ||

        order.status ===
          status;


      return (
        searchMatch &&
        statusMatch
      );

    }
  );

}


/* =========================================================
   RENDER ORDERS
========================================================= */

function renderOrders() {

  const orders =
    getFilteredOrders();


  if (
    !orders.length
  ) {

    adminOrders.innerHTML = `

      <article class="admin-order-card glass-card">

        No orders match your filters.

      </article>

    `;


    return;

  }


  adminOrders.innerHTML =
    orders

      .map(
        order => `

          <article class="admin-order-card glass-card">


            <div class="admin-order-top">

              <div>

                <span class="eyebrow">
                  Order
                </span>

                <h2>
                  ${escapeHTML(order.order_number)}
                </h2>

                <div class="admin-order-meta">

                  ${new Date(
                    order.created_at
                  ).toLocaleString()}

                </div>

              </div>


              <div>

                <strong style="font-size:1.35rem;">

                  ${formatPrice(order.total)}

                </strong>

              </div>

            </div>



            <div class="admin-customer-grid">

              <div class="admin-detail">

                <small>
                  Customer
                </small>

                <strong>
                  ${escapeHTML(order.customer_name || "Not provided")}
                </strong>

              </div>


              <div class="admin-detail">

                <small>
                  Email
                </small>

                ${escapeHTML(order.customer_email || "")}

              </div>


              <div class="admin-detail">

                <small>
                  Phone
                </small>

                ${escapeHTML(order.customer_phone || "")}

              </div>


              <div class="admin-detail">

                <small>
                  Payment
                </small>

                ${escapeHTML(order.payment_status || "Unpaid")}

              </div>


              <div class="admin-detail">

                <small>
                  Shipping Address
                </small>

                ${escapeHTML(order.shipping_address || "")}

                ${
                  order.shipping_address_2
                    ? `<br>${escapeHTML(order.shipping_address_2)}`
                    : ""
                }

                <br>

                ${escapeHTML(order.shipping_city || "")},
                ${escapeHTML(order.shipping_state || "")}
                ${escapeHTML(order.shipping_zip || "")}

                <br>

                ${escapeHTML(order.shipping_country || "")}

              </div>


              <div class="admin-detail">

                <small>
                  Delivery Instructions
                </small>

                ${escapeHTML(order.delivery_instructions || "None")}

              </div>

            </div>



            <div class="admin-order-items">

              <strong>
                Products
              </strong>


              ${(
                order.order_items ||
                []
              )

                .map(
                  item => `

                    <div class="admin-order-line">

                      <span>

                        ${escapeHTML(item.product_name)}

                        ${
                          item.strength
                            ? `— ${escapeHTML(item.strength)}`
                            : ""
                        }

                        × ${item.quantity}

                      </span>


                      <strong>

                        ${formatPrice(item.line_total)}

                      </strong>

                    </div>

                  `
                )

                .join("")}

            </div>



            <div class="admin-order-actions">

              <div>

                <small>
                  Order Status
                </small>

                <select
                  class="admin-status-select"
                  data-order-id="${order.id}"
                >

                  ${[
                    "Pending",
                    "Processing",
                    "Shipped",
                    "Delivered",
                    "Cancelled"
                  ]

                    .map(
                      status => `

                        <option
                          value="${status}"
                          ${
                            order.status === status
                              ? "selected"
                              : ""
                          }
                        >
                          ${status}
                        </option>

                      `
                    )

                    .join("")}

                </select>

              </div>


              <div>

                <span>
                  Subtotal:
                  ${formatPrice(order.subtotal)}
                </span>

              </div>

            </div>


          </article>

        `
      )

      .join("");


  adminOrders
    .querySelectorAll(
      ".admin-status-select"
    )

    .forEach(
      select => {

        select.addEventListener(
          "change",
          async () => {

            await updateOrderStatus(

              select.dataset
                .orderId,

              select.value

            );

          }
        );

      }
    );

}


/* =========================================================
   UPDATE STATUS
========================================================= */

async function updateOrderStatus(
  orderId,
  status
) {

  const {
    error
  } =
    await supabaseClient

      .from(
        "orders"
      )

      .update({

        status:
          status,

        updated_at:
          new Date()
            .toISOString()

      })

      .eq(
        "id",
        orderId
      );


  if (
    error
  ) {

    console.error(
      error
    );


    showToast(
      error.message
    );


    return;

  }


  const order =
    allOrders.find(
      item =>
        item.id ===
        orderId
    );


  if (
    order
  ) {

    order.status =
      status;

  }


  updateStatistics();


  showToast(
    `Order changed to ${status}.`
  );

}


/* =========================================================
   EVENTS
========================================================= */

function initializeAdminEvents() {

  document.getElementById(
    "adminSearch"
  )
    ?.addEventListener(
      "input",
      renderOrders
    );


  document.getElementById(
    "adminStatusFilter"
  )
    ?.addEventListener(
      "change",
      renderOrders
    );


  document.getElementById(
    "refreshOrders"
  )
    ?.addEventListener(
      "click",
      loadOrders
    );


  document.getElementById(
    "adminLogout"
  )
    ?.addEventListener(
      "click",
      async () => {

        await supabaseClient.auth
          .signOut();


        window.location.href =
          "/";

      }
    );

}


/* =========================================================
   START
========================================================= */

async function initializeOwnerPortal() {

  const authorized =
    await verifyAdministrator();


  if (
    !authorized
  ) {

    return;

  }


  initializeAdminEvents();


  await loadOrders();

}


document.addEventListener(
  "DOMContentLoaded",
  initializeOwnerPortal
);