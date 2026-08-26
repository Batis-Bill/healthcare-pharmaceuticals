/* =========================================================
   HEALTHCARE PHARMACEUTICALS
   OWNER PORTAL
========================================================= */


/* =========================================================
   SUPABASE

   IMPORTANT:
   USE THE SAME VALUES FROM YOUR WORKING script.js
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
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );


/* =========================================================
   STATE
========================================================= */

let adminUser = null;

let adminProfile = null;

let allOrders = [];


/* =========================================================
   ELEMENTS
========================================================= */

const adminLoading =
  document.getElementById(
    "adminLoading"
  );


const adminLoginScreen =
  document.getElementById(
    "adminLoginScreen"
  );


const adminDeniedScreen =
  document.getElementById(
    "adminDeniedScreen"
  );


const adminDashboard =
  document.getElementById(
    "adminDashboard"
  );


const adminOrders =
  document.getElementById(
    "adminOrders"
  );


const adminLoginForm =
  document.getElementById(
    "adminLoginForm"
  );


const adminLoginButton =
  document.getElementById(
    "adminLoginButton"
  );


const toast =
  document.getElementById(
    "toast"
  );


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {

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


function formatPrice(value) {

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


function showToast(message) {

  if (
    !toast
  ) {
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      3200
    );

}


/* =========================================================
   SCREENS
========================================================= */

function hideAllScreens() {

  adminLoading
    ?.classList
    .add(
      "hidden"
    );


  adminLoginScreen
    ?.classList
    .add(
      "hidden"
    );


  adminDeniedScreen
    ?.classList
    .add(
      "hidden"
    );


  adminDashboard
    ?.classList
    .add(
      "hidden"
    );

}


function showLoading() {

  hideAllScreens();


  adminLoading
    ?.classList
    .remove(
      "hidden"
    );

}


function showLogin() {

  hideAllScreens();


  adminLoginScreen
    ?.classList
    .remove(
      "hidden"
    );

}


function showDenied() {

  hideAllScreens();


  adminDeniedScreen
    ?.classList
    .remove(
      "hidden"
    );

}


function showDashboard() {

  hideAllScreens();


  adminDashboard
    ?.classList
    .remove(
      "hidden"
    );

}


/* =========================================================
   CHECK ADMIN ROLE
========================================================= */

async function getAdministratorProfile(user) {

  if (
    !user
  ) {
    return null;
  }


  const {
    data,
    error
  } =
    await supabaseClient

      .from(
        "profiles"
      )

      .select(
        "id, full_name, phone, role"
      )

      .eq(
        "id",
        user.id
      )

      .maybeSingle();


  if (
    error
  ) {

    console.error(
      "Admin profile lookup failed:",
      error
    );


    return null;

  }


  return data;

}


/* =========================================================
   VERIFY CURRENT SESSION
========================================================= */

async function verifyCurrentSession() {

  showLoading();


  try {

    const {
      data,
      error
    } =
      await supabaseClient.auth
        .getSession();


    if (
      error
    ) {

      console.error(
        "Session error:",
        error
      );


      showLogin();

      return;

    }


    const session =
      data.session;


    if (
      !session
    ) {

      adminUser =
        null;


      adminProfile =
        null;


      showLogin();

      return;

    }


    adminUser =
      session.user;


    adminProfile =
      await getAdministratorProfile(
        adminUser
      );


    if (
      !adminProfile
    ) {

      showDenied();

      return;

    }


    if (
      adminProfile.role !==
      "admin"
    ) {

      showDenied();

      return;

    }


    await initializeDashboard();

  } catch (
    error
  ) {

    console.error(
      "Owner portal initialization error:",
      error
    );


    showLogin();

  }

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

async function loginAdministrator(
  email,
  password
) {

  adminLoginButton.disabled =
    true;


  adminLoginButton.textContent =
    "Signing In...";


  try {

    const {
      data,
      error
    } =
      await supabaseClient.auth
        .signInWithPassword({
          email:
            email
              .trim()
              .toLowerCase(),

          password:
            password
        });


    if (
      error
    ) {

      console.error(
        "Login error:",
        error
      );


      if (
        error.message
          ?.toLowerCase()
          .includes(
            "email not confirmed"
          )
      ) {

        showToast(
          "Please confirm this account's email before signing in."
        );

      } else {

        showToast(
          error.message ||
          "Unable to sign in."
        );

      }


      return;

    }


    adminUser =
      data.user;


    adminProfile =
      await getAdministratorProfile(
        adminUser
      );


    if (
      !adminProfile
    ) {

      await supabaseClient.auth
        .signOut();


      showToast(
        "Administrator profile could not be found."
      );


      showLogin();

      return;

    }


    if (
      adminProfile.role !==
      "admin"
    ) {

      showDenied();

      return;

    }


    showToast(
      "Administrator login successful."
    );


    await initializeDashboard();

  } catch (
    error
  ) {

    console.error(
      "Administrator login failed:",
      error
    );


    showToast(
      "Unable to sign in."
    );

  } finally {

    adminLoginButton.disabled =
      false;


    adminLoginButton.textContent =
      "Sign In";

  }

}


/* =========================================================
   INITIALIZE DASHBOARD
========================================================= */

async function initializeDashboard() {

  showDashboard();


  const adminEmail =
    document.getElementById(
      "adminEmail"
    );


  if (
    adminEmail
  ) {

    const displayName =
      adminProfile
        ?.full_name ||
      "Administrator";


    adminEmail.textContent =
      `${displayName} • ${adminUser.email}`;

  }


  await loadOrders();

}


/* =========================================================
   LOAD ORDERS
========================================================= */

async function loadOrders() {

  if (
    !adminOrders
  ) {
    return;
  }


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
        updated_at,
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
      "Unable to load orders:",
      error
    );


    adminOrders.innerHTML = `

      <article class="admin-order-card glass-card">

        <h3>
          Unable to load orders
        </h3>

        <p>
          ${escapeHTML(error.message)}
        </p>

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


  const orderValue =
    allOrders

      .filter(
        order =>
          order.status !==
          "Cancelled"
      )

      .reduce(
        (
          total,
          order
        ) =>

          total +
          Number(
            order.total || 0
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
      orderValue
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
      ?.value
      .trim()
      .toLowerCase() ||
    "";


  const status =
    document.getElementById(
      "adminStatusFilter"
    )
      ?.value ||
    "all";


  return allOrders.filter(
    order => {

      const searchText =

        `${order.order_number || ""}
         ${order.customer_name || ""}
         ${order.customer_email || ""}
         ${order.customer_phone || ""}
         ${order.shipping_city || ""}
         ${order.shipping_state || ""}`

          .toLowerCase();


      const matchesSearch =
        !search ||
        searchText.includes(
          search
        );


      const matchesStatus =
        status ===
          "all" ||
        order.status ===
          status;


      return (
        matchesSearch &&
        matchesStatus
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

        <h3>
          No orders found
        </h3>

        <p>
          There are no orders matching your current search or filter.
        </p>

      </article>

    `;


    return;

  }


  adminOrders.innerHTML =
    orders

      .map(
        order => {

          const items =
            order.order_items ||
            [];


          return `

            <article class="admin-order-card glass-card">


              <div class="admin-order-top">

                <div>

                  <span class="eyebrow">
                    Order
                  </span>


                  <h2>
                    ${escapeHTML(
                      order.order_number
                    )}
                  </h2>


                  <div class="admin-order-meta">

                    ${new Date(
                      order.created_at
                    ).toLocaleString()}

                  </div>

                </div>


                <div class="admin-order-price">

                  <small>
                    Total
                  </small>

                  <strong>
                    ${formatPrice(
                      order.total
                    )}
                  </strong>

                </div>

              </div>



              <div class="admin-customer-grid">


                <div class="admin-detail">

                  <small>
                    Customer
                  </small>

                  <strong>
                    ${escapeHTML(
                      order.customer_name ||
                      "Not provided"
                    )}
                  </strong>

                </div>


                <div class="admin-detail">

                  <small>
                    Email
                  </small>

                  <span>
                    ${escapeHTML(
                      order.customer_email ||
                      "Not provided"
                    )}
                  </span>

                </div>


                <div class="admin-detail">

                  <small>
                    Phone
                  </small>

                  <span>
                    ${escapeHTML(
                      order.customer_phone ||
                      "Not provided"
                    )}
                  </span>

                </div>


                <div class="admin-detail">

                  <small>
                    Payment Status
                  </small>

                  <span>
                    ${escapeHTML(
                      order.payment_status ||
                      "Unpaid"
                    )}
                  </span>

                </div>


                <div class="admin-detail">

                  <small>
                    Payment Method
                  </small>

                  <span>
                    ${escapeHTML(
                      order.payment_method ||
                      "Not specified"
                    )}
                  </span>

                </div>


                <div class="admin-detail">

                  <small>
                    Shipping Address
                  </small>

                  <span>

                    ${escapeHTML(
                      order.shipping_address ||
                      ""
                    )}

                    ${
                      order.shipping_address_2

                        ? `<br>${escapeHTML(
                            order.shipping_address_2
                          )}`

                        : ""
                    }

                    <br>

                    ${escapeHTML(
                      order.shipping_city ||
                      ""
                    )}

                    ${
                      order.shipping_city &&
                      order.shipping_state
                        ? ", "
                        : ""
                    }

                    ${escapeHTML(
                      order.shipping_state ||
                      ""
                    )}

                    ${escapeHTML(
                      order.shipping_zip ||
                      ""
                    )}

                    <br>

                    ${escapeHTML(
                      order.shipping_country ||
                      ""
                    )}

                  </span>

                </div>


                <div class="admin-detail">

                  <small>
                    Delivery Instructions
                  </small>

                  <span>
                    ${escapeHTML(
                      order.delivery_instructions ||
                      "None"
                    )}
                  </span>

                </div>


              </div>



              <div class="admin-order-items">

                <strong>
                  Products
                </strong>


                ${
                  items.length

                    ? items
                        .map(
                          item => `

                            <div class="admin-order-line">

                              <span>

                                ${escapeHTML(
                                  item.product_name
                                )}

                                ${
                                  item.strength

                                    ? `— ${escapeHTML(
                                        item.strength
                                      )}`

                                    : ""
                                }

                                ×
                                ${item.quantity}

                              </span>


                              <strong>

                                ${formatPrice(
                                  item.line_total
                                )}

                              </strong>

                            </div>

                          `
                        )
                        .join("")

                    : `

                      <p class="admin-order-meta">
                        No order items found.
                      </p>

                    `
                }

              </div>



              <div class="admin-order-actions">

                <label>

                  Order Status

                  <select
                    class="admin-status-select order-status-control"
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
                              order.status ===
                              status

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

                </label>


                <div class="admin-order-totals">

                  <span>
                    Subtotal:
                    ${formatPrice(
                      order.subtotal
                    )}
                  </span>

                  <span>
                    Shipping:
                    ${formatPrice(
                      order.shipping
                    )}
                  </span>

                  <strong>
                    Total:
                    ${formatPrice(
                      order.total
                    )}
                  </strong>

                </div>

              </div>


            </article>

          `;

        }
      )

      .join("");


  adminOrders
    .querySelectorAll(
      ".order-status-control"
    )

    .forEach(
      select => {

        select.addEventListener(
          "change",
          async () => {

            await updateOrderStatus(
              select.dataset.orderId,
              select.value,
              select
            );

          }
        );

      }
    );

}


/* =========================================================
   UPDATE ORDER STATUS
========================================================= */

async function updateOrderStatus(
  orderId,
  newStatus,
  selectElement
) {

  if (
    !adminUser ||
    adminProfile?.role !==
      "admin"
  ) {

    showToast(
      "Administrator access required."
    );

    return;

  }


  selectElement.disabled =
    true;


  const {
    error
  } =
    await supabaseClient

      .from(
        "orders"
      )

      .update({
        status:
          newStatus,

        updated_at:
          new Date()
            .toISOString()
      })

      .eq(
        "id",
        orderId
      );


  selectElement.disabled =
    false;


  if (
    error
  ) {

    console.error(
      "Status update failed:",
      error
    );


    showToast(
      error.message
    );


    await loadOrders();

    return;

  }


  const localOrder =
    allOrders.find(
      order =>
        order.id ===
        orderId
    );


  if (
    localOrder
  ) {

    localOrder.status =
      newStatus;

  }


  updateStatistics();


  showToast(
    `Order changed to ${newStatus}.`
  );

}


/* =========================================================
   LOGOUT
========================================================= */

async function logoutAdministrator() {

  await supabaseClient.auth
    .signOut();


  adminUser =
    null;


  adminProfile =
    null;


  allOrders =
    [];


  adminLoginForm
    ?.reset();


  showLogin();


  showToast(
    "Logged out."
  );

}


/* =========================================================
   PASSWORD RESET
========================================================= */

async function sendAdminPasswordReset() {

  const email =
    document.getElementById(
      "adminLoginEmail"
    )
      ?.value
      .trim()
      .toLowerCase();


  if (
    !email
  ) {

    showToast(
      "Enter your administrator email first."
    );

    return;

  }


  const {
    error
  } =
    await supabaseClient.auth
      .resetPasswordForEmail(
        email,
        {
          redirectTo:
            `${window.location.origin}/owner-portal.html`
        }
      );


  if (
    error
  ) {

    console.error(
      "Password reset error:",
      error
    );


    showToast(
      error.message
    );

    return;

  }


  showToast(
    "Password reset email sent."
  );

}


/* =========================================================
   EVENTS
========================================================= */

function initializeAdminEvents() {


  adminLoginForm
    ?.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        const email =
          document.getElementById(
            "adminLoginEmail"
          ).value;


        const password =
          document.getElementById(
            "adminLoginPassword"
          ).value;


        await loginAdministrator(
          email,
          password
        );

      }
    );


  document.getElementById(
    "toggleAdminPassword"
  )
    ?.addEventListener(
      "click",
      event => {

        const passwordInput =
          document.getElementById(
            "adminLoginPassword"
          );


        const showing =
          passwordInput.type ===
          "text";


        passwordInput.type =
          showing
            ? "password"
            : "text";


        event.currentTarget.textContent =
          showing
            ? "Show"
            : "Hide";

      }
    );


  document.getElementById(
    "adminForgotPassword"
  )
    ?.addEventListener(
      "click",
      sendAdminPasswordReset
    );


  document.getElementById(
    "adminLogout"
  )
    ?.addEventListener(
      "click",
      logoutAdministrator
    );


  document.getElementById(
    "deniedLogoutButton"
  )
    ?.addEventListener(
      "click",
      logoutAdministrator
    );


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
      async () => {

        showToast(
          "Refreshing orders..."
        );


        await loadOrders();

      }
    );

}


/* =========================================================
   AUTH STATE LISTENER
========================================================= */

function initializeAuthListener() {

  supabaseClient.auth
    .onAuthStateChange(
      async (
        event,
        session
      ) => {

        if (
          event ===
          "SIGNED_OUT"
        ) {

          adminUser =
            null;


          adminProfile =
            null;


          showLogin();

          return;

        }


        if (
          session?.user
        ) {

          adminUser =
            session.user;

        }

      }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

async function initializeOwnerPortal() {

  initializeAdminEvents();


  initializeAuthListener();


  await verifyCurrentSession();

}


document.addEventListener(
  "DOMContentLoaded",
  initializeOwnerPortal
);