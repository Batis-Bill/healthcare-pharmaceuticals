/* =========================================================
   HEALTHCARE PHARMACEUTICALS
========================================================= */


/* =========================================================
   SUPABASE
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
   PRODUCTS
========================================================= */

const products = [

  /* =====================================================
     CURRENT PRODUCTS
  ====================================================== */

  {
    id: 1,

    name:
      "Mounjaro",

    category:
      "medicine",

    categoryLabel:
      "Medicine",

    image:
      "assets/products/mounjaro.jpg",

    video:
      "assets/products/mounjaro.mp4",

    description:
      "Available in multiple strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "2.5 mg",
        price: 150
      },

      {
        strength: "5 mg",
        price: 200
      },

      {
        strength: "7.5 mg",
        price: 250
      },

      {
        strength: "10 mg",
        price: 300
      },

      {
        strength: "12.5 mg",
        price: 400
      },

      {
        strength: "15 mg",
        price: 450
      }

    ]
  },


  {
    id: 2,

    name:
      "Ozempic",

    category:
      "medicine",

    categoryLabel:
      "Medicine",

    image:
      "assets/products/ozempic.jpg",

    video:
      "",

    description:
      "Available in multiple strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "0.25 mg",
        price: 100
      },

      {
        strength: "0.5 mg",
        price: 130
      },

      {
        strength: "1 mg",
        price: 150
      }

    ]
  },


  {
    id: 3,

    name:
      "Wegovy",

    category:
      "medicine",

    categoryLabel:
      "Medicine",

    image:
      "assets/products/vegovy.jpg",

    video:
      "",

    description:
      "Available in multiple strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "0.25 mg",
        price: 199
      },

      {
        strength: "0.5 mg",
        price: 199
      },

      {
        strength: "1 mg",
        price: 249
      },

      {
        strength: "1.7 mg",
        price: 299
      },

      {
        strength: "2.4 mg",
        price: 349
      }

    ]
  },


  {
    id: 4,

    name:
      "Saxenda",

    category:
      "medicine",

    categoryLabel:
      "Medicine",

    image:
      "assets/products/saxenda.jpg",

    video:
      "",

    description:
      "Available in multiple strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "0.6 mg",
        price: 150
      },

      {
        strength: "1.2 mg",
        price: 175
      },

      {
        strength: "1.8 mg",
        price: 200
      },

      {
        strength: "2.4 mg",
        price: 225
      },

      {
        strength: "3 mg",
        price: 250
      }

    ]
  },


  {
    id: 5,

    name:
      "NAD+ Research Compound",

    price:
      89,

    category:
      "cofactor",

    categoryLabel:
      "Cofactor",

    image:
      "assets/products/NAD+.jpg",

    description:
      "NAD+ product in our research collection.",

    badge:
      "Available"
  },


  {
    id: 6,

    name:
      "GHK-Cu Research Peptide",

    price:
      72,

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/ghk-cu.jpg",

    description:
      "GHK-Cu product in our research collection.",

    badge:
      "Available"
  },


  {
    id: 7,

    name:
      "BPC Reference Peptide",

    price:
      64,

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/BPC.jpg",

    description:
      "BPC reference product.",

    badge:
      "Available"
  },


  {
    id: 8,

    name:
      "CJC Reference Material",

    price:
      78,

    category:
      "reference",

    categoryLabel:
      "Reference Material",

    image:
      "assets/products/CJC.jpg",

    description:
      "CJC reference material.",

    badge:
      "Available"
  },


  /* =====================================================
     NEW PEPTIDES
  ====================================================== */


  /* RETTA / RETATRUTIDE */

  {
    id: 9,

    name:
      "Retta",

    fullName:
      "Retatrutide",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/retatrutide.jpg",

    video:
      "",

    description:
      "Retatrutide research compound available in multiple vial strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "10 mg",
        price: 69
      },

      {
        strength: "30 mg",
        price: 170
      }

    ]
  },


  /* BPC-157 */

  {
    id: 10,

    name:
      "BPC-157",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/bpc-157.jpg",

    video:
      "",

    description:
      "BPC-157 research peptide available in multiple vial strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "5 mg",
        price: 52
      },

      {
        strength: "10 mg",
        price: 97
      }

    ]
  },


  /* TESAMORELIN */

  {
    id: 11,

    name:
      "Tesamorelin",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/tesamorelin.jpg",

    video:
      "",

    description:
      "Tesamorelin research peptide available in multiple vial strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "5 mg",
        price: 43
      },

      {
        strength: "10 mg",
        price: 79
      }

    ]
  },


  /* MOTS-C */

  {
    id: 12,

    name:
      "MOTS-C",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/mots-c.jpg",

    video:
      "",

    description:
      "MOTS-C research peptide.",

    badge:
      "Available",

    dosages: [

      {
        strength: "10 mg",
        price: 116
      }

    ]
  },


  /* SS-31 */

  {
    id: 13,

    name:
      "SS-31",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/ss-31.jpg",

    video:
      "",

    description:
      "SS-31 research peptide available in multiple vial strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "10 mg",
        price: 29
      },

      {
        strength: "50 mg",
        price: 130
      }

    ]
  },


  /* KPV */

  {
    id: 14,

    name:
      "KPV",

    category:
      "peptide",

    categoryLabel:
      "Peptide",

    image:
      "assets/products/kpv.jpg",

    video:
      "",

    description:
      "KPV research peptide available in multiple vial strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength: "4 mg",
        price: 38
      },

      {
        strength: "10 mg",
        price: 29
      }

    ]
  }

];


/* =========================================================
   GALLERY

   KEEP ADDING YOUR EXACT FILE NAMES HERE
========================================================= */

const galleryMedia = [

  {
    type:
      "image",

    source:
      "assets/gallery/IMG-20260727-WA0039.jpg",

    title:
      "Our Pharmacy"
  },


  {
    type:
      "image",

    source:
      "assets/gallery/IMG-20260727-WA0042.jpg",

    title:
      "Product Collection"
  },


  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0048.mp4",

    title:
      "Inventory Description"
  },


  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0047.mp4",

    title:
      "Inventory Description"
  },


  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0046.mp4",

    title:
      "Inventory Description"
  },

  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0045.mp4",

    title:
      "Inventory Description"
  },


  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0044.mp4",

    title:
      "Inventory Description"
  },


  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0043.mp4",

    title:
      "Inventory Description"
  }

];


/* =========================================================
   REVIEWS
========================================================= */

const reviews = [

  {
    text:
      "Best prices, period.",

    initials:
      "BU",

    handle:
      "@budgetbeaker"
  },

  {
    text:
      "Devon is the man. 10/10 support.",

    initials:
      "GM",

    handle:
      "@gmason"
  },

  {
    text:
      "Love that priority shipping is free on all orders, no minimums and no surprise fees at checkout.",

    initials:
      "NV",

    handle:
      "@nina.volkov"
  },

  {
    text:
      "Genuinely the most affordable pricing I've found anywhere.",

    initials:
      "MD",

    handle:
      "@marcus.delgado"
  },

  {
    text:
      "Ryan in customer service is awesome.",

    initials:
      "HC",

    handle:
      "@hannahcole"
  },

  {
    text:
      "Free priority shipping that actually shows up fast.",

    initials:
      "DP",

    handle:
      "@devin_park"
  }

];


/* =========================================================
   STATE
========================================================= */

const state = {

  cart:
    [],

  category:
    "all",

  search:
    "",

  showAll:
    false,

  galleryExpanded:
    false,

  currentUser:
    null,

  currentProfile:
    null

};


/* =========================================================
   DOM
========================================================= */

const productGrid =
  document.getElementById(
    "productGrid"
  );


const categoryFilter =
  document.getElementById(
    "categoryFilter"
  );


const showAllProducts =
  document.getElementById(
    "showAllProducts"
  );


const globalSearch =
  document.getElementById(
    "globalSearch"
  );


const cartItems =
  document.getElementById(
    "cartItems"
  );


const cartCount =
  document.getElementById(
    "cartCount"
  );


const cartSubtotal =
  document.getElementById(
    "cartSubtotal"
  );


const cartSummary =
  document.getElementById(
    "cartSummary"
  );


const cartEmpty =
  document.getElementById(
    "cartEmpty"
  );


const sideMenu =
  document.getElementById(
    "sideMenu"
  );


const cartDrawer =
  document.getElementById(
    "cartDrawer"
  );


const pageOverlay =
  document.getElementById(
    "pageOverlay"
  );


const accountModal =
  document.getElementById(
    "accountModal"
  );


const dashboardModal =
  document.getElementById(
    "dashboardModal"
  );


const checkoutModal =
  document.getElementById(
    "checkoutModal"
  );


const confirmationModal =
  document.getElementById(
    "confirmationModal"
  );


const searchPanel =
  document.getElementById(
    "searchPanel"
  );


const toast =
  document.getElementById(
    "toast"
  );


/* =========================================================
   UTILITIES
========================================================= */

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


function getInitials(
  name
) {

  if (
    !name
  ) {

    return "U";

  }


  return name

    .trim()

    .split(/\s+/)

    .slice(
      0,
      2
    )

    .map(
      word =>
        word[0]
    )

    .join("")

    .toUpperCase();

}


function showToast(
  message
) {

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

      3000
    );

}


/* =========================================================
   AUTH PROFILE
========================================================= */

async function loadUserProfile() {

  if (
    !state.currentUser
  ) {

    state.currentProfile =
      null;

    return;

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
        "*"
      )

      .eq(
        "id",
        state.currentUser.id
      )

      .maybeSingle();


  if (
    error
  ) {

    console.error(
      "Profile error:",
      error
    );

    return;

  }


  state.currentProfile =
    data;

}


/* =========================================================
   TAWK
========================================================= */

async function updateTawkVisitor() {

  if (
    !state.currentUser
  ) {

    return;

  }


  const name =
    state.currentProfile
      ?.full_name ||

    state.currentUser
      ?.user_metadata
      ?.full_name ||

    "Customer";


  const email =
    state.currentUser
      ?.email ||
    "";


  const update =
    () => {

      if (
        window.Tawk_API &&
        typeof window.Tawk_API
          .setAttributes ===
          "function"
      ) {

        window.Tawk_API.setAttributes(
          {

            name:
              name,

            email:
              email

          }
        );

      }

    };


  if (
    window.Tawk_API &&
    typeof window.Tawk_API
      .setAttributes ===
      "function"
  ) {

    update();

  } else {

    window.Tawk_API =
      window.Tawk_API ||
      {};


    window.Tawk_API.onLoad =
      update;

  }

}


/* =========================================================
   REGISTER
========================================================= */

async function registerUser(
  name,
  email,
  phone,
  password
) {

  const {
    data,
    error
  } =
    await supabaseClient.auth
      .signUp({

        email:
          email
            .trim()
            .toLowerCase(),

        password:
          password,

        options: {

          data: {

            full_name:
              name.trim(),

            phone:
              phone.trim()

          },

          emailRedirectTo:
            window.location.origin

        }

      });


  if (
    error
  ) {

    console.error(
      error
    );

    showToast(
      error.message
    );

    return false;

  }


  if (
    !data.session
  ) {

    showToast(
      "Account created. Check your email to confirm your account."
    );


    return true;

  }


  state.currentUser =
    data.user;


  await loadUserProfile();


  updateAccountUI();


  return true;

}


/* =========================================================
   LOGIN
========================================================= */

async function loginUser(
  email,
  password
) {

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
      error
    );


    showToast(
      error.message
    );


    return false;

  }


  state.currentUser =
    data.user;


  await loadUserProfile();


  loadCart();


  updateAccountUI();


  renderCart();


  await updateTawkVisitor();


  showToast(
    "Login successful."
  );


  return true;

}


/* =========================================================
   LOGOUT
========================================================= */

async function logoutUser() {

  await supabaseClient.auth
    .signOut();


  state.currentUser =
    null;


  state.currentProfile =
    null;


  state.cart =
    [];


  loadCart();


  updateAccountUI();


  renderCart();


  dashboardModal
    ?.close();


  closeSidePanels();


  showToast(
    "Logged out."
  );

}


/* =========================================================
   SESSION
========================================================= */

async function restoreSession() {

  const {
    data
  } =
    await supabaseClient.auth
      .getSession();


  if (
    data.session
  ) {

    state.currentUser =
      data.session.user;


    await loadUserProfile();


    await updateTawkVisitor();

  }


  loadCart();


  updateAccountUI();


  renderCart();

}


function initializeAuthListener() {

  supabaseClient.auth
    .onAuthStateChange(

      async (
        event,
        session
      ) => {

        state.currentUser =
          session
            ?.user ||
          null;


        if (
          state.currentUser
        ) {

          await loadUserProfile();

        } else {

          state.currentProfile =
            null;

        }


        updateAccountUI();

      }

    );

}


/* =========================================================
   ACCOUNT UI
========================================================= */

function updateAccountUI() {

  const loggedIn =
    Boolean(
      state.currentUser
    );


  document.getElementById(
    "menuUserCard"
  )
    ?.classList
    .toggle(
      "active",
      loggedIn
    );


  document.getElementById(
    "loginOpen"
  )
    ?.classList
    .toggle(
      "hidden-login",
      loggedIn
    );


  document.getElementById(
    "logoutMenuButton"
  )
    ?.classList
    .toggle(
      "active",
      loggedIn
    );


  document.getElementById(
    "myAccountMenuButton"
  )
    ?.classList
    .toggle(
      "active",
      loggedIn
    );


  document.getElementById(
    "accountOnlineDot"
  )
    ?.classList
    .toggle(
      "active",
      loggedIn
    );


  if (
    loggedIn
  ) {

    const name =
      state.currentProfile
        ?.full_name ||

      state.currentUser
        ?.user_metadata
        ?.full_name ||

      "Customer";


    document.getElementById(
      "menuUserName"
    ).textContent =
      name;


    document.getElementById(
      "menuUserEmail"
    ).textContent =
      state.currentUser.email;


    document.getElementById(
      "menuUserAvatar"
    ).textContent =
      getInitials(
        name
      );

  }

}


/* =========================================================
   CART STORAGE
========================================================= */

function getCartKey() {

  return state.currentUser

    ? `hp-cart-${state.currentUser.id}`

    : "hp-guest-cart";

}


function loadCart() {

  try {

    state.cart =
      JSON.parse(
        localStorage.getItem(
          getCartKey()
        )
      ) || [];

  } catch {

    state.cart =
      [];

  }

}


function saveCart() {

  localStorage.setItem(

    getCartKey(),

    JSON.stringify(
      state.cart
    )

  );

}


/* =========================================================
   PRODUCTS
========================================================= */

function getVisibleProducts() {

  const query =
    state.search
      .toLowerCase()
      .trim();


  return products.filter(
    product => {

      const categoryOK =

        state.category ===
          "all" ||

        product.category ===
          state.category;


      const searchText =

        `${product.name}
         ${product.fullName || ""}
         ${product.categoryLabel}
         ${product.description}`

          .toLowerCase();


      const searchOK =

        !query ||

        searchText.includes(
          query
        );


      return (
        categoryOK &&
        searchOK
      );

    }
  );

}


function createProductCard(
  product
) {

  const firstPrice =
    product.dosages
      ?.length

      ? product.dosages[0]
          .price

      : product.price;


  const dosageHTML =
    product.dosages
      ?.length

      ? `

        <select
          class="dosage-select"
          id="dose-${product.id}"
        >

          ${product.dosages

            .map(
              dose => `

                <option
                  value="${escapeHTML(dose.strength)}"
                  data-price="${dose.price}"
                >
                  ${escapeHTML(dose.strength)}
                  —
                  ${formatPrice(dose.price)}
                </option>

              `
            )

            .join("")}

        </select>

      `

      : "";


  return `

    <article class="product-card">

      <span class="product-badge">
        ${escapeHTML(product.badge)}
      </span>


      <div class="product-media">

        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="
            this.style.display='none';
            this.nextElementSibling.style.display='grid';
          "
        >


        <div
          class="product-image-missing"
          style="display:none;"
        >

          <div>

            <div style="font-size:40px;">
              🧪
            </div>

            <span>
              Add
              ${escapeHTML(product.name)}
              image
            </span>

          </div>

        </div>

      </div>


      <div class="product-info">

        <span class="product-category">
          ${escapeHTML(product.categoryLabel)}
        </span>


        <h3>
          ${escapeHTML(product.name)}
        </h3>


        <p>
          ${escapeHTML(product.description)}
        </p>


        ${dosageHTML}


        <div class="product-bottom">

          <span
            class="product-price"
            id="price-${product.id}"
          >
            ${formatPrice(firstPrice)}
          </span>


          <button
            class="add-cart"
            type="button"
            data-product-id="${product.id}"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </article>

  `;

}


function renderProducts() {

  if (
    !productGrid
  ) {

    return;

  }


  const filtered =
    getVisibleProducts();


  const displayed =
    state.showAll

      ? filtered

      : filtered.slice(
          0,
          8
        );


  productGrid.innerHTML =
    displayed

      .map(
        createProductCard
      )

      .join("");


  if (
    showAllProducts
  ) {

    showAllProducts.hidden =
      filtered.length <=
      8;


    showAllProducts.textContent =
      state.showAll

        ? "Show Featured Products"

        : "See All Products";

  }


  productGrid
    .querySelectorAll(
      ".add-cart"
    )

    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            addToCart(

              Number(
                button.dataset
                  .productId
              )

            );

          }
        );

      }
    );


  initializeDosageSelectors();

}


function initializeDosageSelectors() {

  document
    .querySelectorAll(
      ".dosage-select"
    )

    .forEach(
      select => {

        select.addEventListener(
          "change",
          () => {

            const productId =
              select.id.replace(
                "dose-",
                ""
              );


            const option =
              select.options[
                select.selectedIndex
              ];


            const priceElement =
              document.getElementById(
                `price-${productId}`
              );


            if (
              priceElement
            ) {

              priceElement.textContent =
                formatPrice(
                  option.dataset.price
                );

            }

          }
        );

      }
    );

}


/* =========================================================
   CART
========================================================= */

function addToCart(
  productId
) {

  const product =
    products.find(
      product =>
        product.id ===
        productId
    );


  if (
    !product
  ) {

    return;

  }


  let strength =
    null;


  let price =
    product.price;


  if (
    product.dosages
  ) {

    const select =
      document.getElementById(
        `dose-${productId}`
      );


    const option =
      select.options[
        select.selectedIndex
      ];


    strength =
      option.value;


    price =
      Number(
        option.dataset
          .price
      );

  }


  const cartKey =
    `${productId}-${strength || "standard"}`;


  const existing =
    state.cart.find(
      item =>
        item.cartKey ===
        cartKey
    );


  if (
    existing
  ) {

    existing.quantity++;

  } else {

    state.cart.push({

      cartKey:
        cartKey,

      id:
        product.id,

      name:
        product.name,

      strength:
        strength,

      price:
        Number(price),

      quantity:
        1

    });

  }


  saveCart();


  renderCart();


  showToast(
    `${product.name} added to cart.`
  );

}


function getCartSubtotal() {

  return state.cart.reduce(

    (
      total,
      item
    ) =>

      total +
      item.price *
      item.quantity,

    0

  );

}


function renderCart() {

  if (
    !cartItems
  ) {

    return;

  }


  const count =
    state.cart.reduce(

      (
        total,
        item
      ) =>

        total +
        item.quantity,

      0

    );


  const subtotal =
    getCartSubtotal();


  cartCount.textContent =
    count;


  cartSubtotal.textContent =
    formatPrice(
      subtotal
    );


  if (
    !state.cart.length
  ) {

    cartItems.innerHTML =
      "";


    cartEmpty.classList.add(
      "show"
    );


    cartSummary.style.display =
      "none";


    return;

  }


  cartEmpty.classList.remove(
    "show"
  );


  cartSummary.style.display =
    "block";


  cartItems.innerHTML =
    state.cart

      .map(
        item => `

          <div class="cart-item">

            <div>

              <h4>
                ${escapeHTML(item.name)}
              </h4>

              ${
                item.strength

                  ? `<p>${escapeHTML(item.strength)}</p>`

                  : ""
              }

              <p>
                ${formatPrice(item.price)}
              </p>


              <div class="quantity-control">

                <button
                  data-action="minus"
                  data-key="${escapeHTML(item.cartKey)}"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  data-action="plus"
                  data-key="${escapeHTML(item.cartKey)}"
                >
                  +
                </button>

              </div>

            </div>


            <button
              class="remove-item"
              data-action="remove"
              data-key="${escapeHTML(item.cartKey)}"
            >
              Remove
            </button>

          </div>

        `
      )

      .join("");


  cartItems
    .querySelectorAll(
      "[data-action]"
    )

    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            updateCartItem(

              button.dataset.key,

              button.dataset.action

            );

          }
        );

      }
    );

}


function updateCartItem(
  key,
  action
) {

  const item =
    state.cart.find(
      item =>
        item.cartKey ===
        key
    );


  if (
    !item
  ) {

    return;

  }


  if (
    action ===
    "plus"
  ) {

    item.quantity++;

  }


  if (
    action ===
    "minus"
  ) {

    item.quantity--;

  }


  if (
    action ===
      "remove" ||

    item.quantity <=
      0
  ) {

    state.cart =
      state.cart.filter(
        item =>
          item.cartKey !==
          key
      );

  }


  saveCart();


  renderCart();

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

  if (
    !state.cart.length
  ) {

    showToast(
      "Your cart is empty."
    );

    return;

  }


  if (
    !state.currentUser
  ) {

    closeSidePanels();


    showToast(
      "Please log in before checkout."
    );


    openAccountModal();


    return;

  }


  const name =
    state.currentProfile
      ?.full_name ||

    state.currentUser
      ?.user_metadata
      ?.full_name ||

    "";


  document.getElementById(
    "checkoutName"
  ).value =
    name;


  document.getElementById(
    "checkoutEmail"
  ).value =
    state.currentUser.email ||
    "";


  document.getElementById(
    "checkoutPhone"
  ).value =
    state.currentProfile
      ?.phone ||
    "";


  renderCheckoutSummary();


  closeSidePanels();


  checkoutModal.showModal();

}


function renderCheckoutSummary() {

  const container =
    document.getElementById(
      "checkoutItems"
    );


  const subtotal =
    getCartSubtotal();


  container.innerHTML =
    state.cart

      .map(
        item => `

          <div class="checkout-item">

            <div>

              <strong>
                ${escapeHTML(item.name)}
              </strong>

              <small>

                ${
                  item.strength
                    ? escapeHTML(item.strength)
                    : ""
                }

                ×
                ${item.quantity}

              </small>

            </div>


            <strong>

              ${formatPrice(
                item.price *
                item.quantity
              )}

            </strong>

          </div>

        `
      )

      .join("");


  document.getElementById(
    "checkoutSubtotal"
  ).textContent =
    formatPrice(
      subtotal
    );


  document.getElementById(
    "checkoutTotal"
  ).textContent =
    formatPrice(
      subtotal
    );

}


/* =========================================================
   CREATE ORDER
========================================================= */

function generateOrderNumber() {

  return (
    "HP-" +
    Date.now()
      .toString()
      .slice(-8) +
    "-" +
    Math.floor(
      Math.random() *
      900 +
      100
    )
  );

}


async function submitOrder(
  event
) {

  event.preventDefault();


  if (
    !state.currentUser ||
    !state.cart.length
  ) {

    return;

  }


  const placeButton =
    document.getElementById(
      "placeOrderButton"
    );


  placeButton.disabled =
    true;


  placeButton.textContent =
    "Creating Order...";


  const subtotal =
    getCartSubtotal();


  const orderNumber =
    generateOrderNumber();


  const orderData = {

    user_id:
      state.currentUser.id,

    order_number:
      orderNumber,

    subtotal:
      subtotal,

    shipping:
      0,

    tax:
      0,

    total:
      subtotal,

    status:
      "Pending",

    customer_name:
      document.getElementById(
        "checkoutName"
      ).value.trim(),

    customer_email:
      document.getElementById(
        "checkoutEmail"
      ).value.trim(),

    customer_phone:
      document.getElementById(
        "checkoutPhone"
      ).value.trim(),

    shipping_address:
      document.getElementById(
        "shippingAddress"
      ).value.trim(),

    shipping_address_2:
      document.getElementById(
        "shippingAddress2"
      ).value.trim(),

    shipping_city:
      document.getElementById(
        "shippingCity"
      ).value.trim(),

    shipping_state:
      document.getElementById(
        "shippingState"
      ).value.trim(),

    shipping_zip:
      document.getElementById(
        "shippingZip"
      ).value.trim(),

    shipping_country:
      document.getElementById(
        "shippingCountry"
      ).value,

    delivery_instructions:
      document.getElementById(
        "deliveryInstructions"
      ).value.trim(),

    payment_method:
      "To be arranged",

    payment_status:
      "Unpaid"

  };


  try {

    const {
      data:
        order,

      error:
        orderError
    } =
      await supabaseClient

        .from(
          "orders"
        )

        .insert(
          orderData
        )

        .select()

        .single();


    if (
      orderError
    ) {

      throw orderError;

    }


    const itemRows =
      state.cart.map(
        item => ({

          order_id:
            order.id,

          user_id:
            state.currentUser.id,

          product_id:
            item.id,

          product_name:
            item.name,

          strength:
            item.strength,

          quantity:
            item.quantity,

          unit_price:
            item.price,

          line_total:
            item.price *
            item.quantity

        })
      );


    const {
      error:
        itemError
    } =
      await supabaseClient

        .from(
          "order_items"
        )

        .insert(
          itemRows
        );


    if (
      itemError
    ) {

      throw itemError;

    }


    state.cart =
      [];


    saveCart();


    renderCart();


    checkoutModal.close();


    document.getElementById(
      "confirmationOrderNumber"
    ).textContent =
      orderNumber;


    document.getElementById(
      "confirmationTotal"
    ).textContent =
      formatPrice(
        subtotal
      );


    confirmationModal.showModal();


  } catch (
    error
  ) {

    console.error(
      "Order creation error:",
      error
    );


    showToast(
      error.message ||
      "Unable to create order."
    );

  } finally {

    placeButton.disabled =
      false;


    placeButton.textContent =
      "Place Order";

  }

}


/* =========================================================
   CUSTOMER DASHBOARD
========================================================= */

function openAccountModal() {

  document.getElementById(
    "loginView"
  )
    ?.classList
    .remove(
      "hidden"
    );


  document.getElementById(
    "registerView"
  )
    ?.classList
    .add(
      "hidden"
    );


  accountModal.showModal();

}


async function openDashboard() {

  if (
    !state.currentUser
  ) {

    openAccountModal();

    return;

  }


  await loadUserProfile();


  const name =
    state.currentProfile
      ?.full_name ||

    state.currentUser
      ?.user_metadata
      ?.full_name ||

    "Customer";


  document.getElementById(
    "dashboardName"
  ).textContent =
    name;


  document.getElementById(
    "dashboardEmail"
  ).textContent =
    state.currentUser.email;


  document.getElementById(
    "dashboardAvatar"
  ).textContent =
    getInitials(
      name
    );


  document.getElementById(
    "profileName"
  ).value =
    name;


  document.getElementById(
    "profileEmail"
  ).value =
    state.currentUser.email;


  document.getElementById(
    "profilePhone"
  ).value =
    state.currentProfile
      ?.phone ||
    "";


  await renderOrderHistory();


  dashboardModal.showModal();

}


async function renderOrderHistory() {

  const container =
    document.getElementById(
      "orderHistory"
    );


  const {
    data:
      orders,

    error
  } =
    await supabaseClient

      .from(
        "orders"
      )

      .select(`
        id,
        order_number,
        total,
        status,
        created_at,
        order_items(
          product_name,
          strength,
          quantity,
          unit_price
        )
      `)

      .eq(
        "user_id",
        state.currentUser.id
      )

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

    container.textContent =
      "Unable to load orders.";

    return;

  }


  if (
    !orders.length
  ) {

    container.innerHTML = `

      <div class="account-order-card glass-card">

        No orders yet.

      </div>

    `;

    return;

  }


  container.innerHTML =
    orders

      .map(
        order => `

          <article class="account-order-card glass-card">

            <div class="order-card-header">

              <strong>
                ${escapeHTML(order.order_number)}
              </strong>

              <span>
                ${escapeHTML(order.status)}
              </span>

            </div>


            <small>
              ${new Date(
                order.created_at
              ).toLocaleString()}
            </small>


            <div class="order-products">

              ${(
                order.order_items ||
                []
              )

                .map(
                  item => `

                    <div class="order-product-row">

                      <span>

                        ${escapeHTML(item.product_name)}

                        ${
                          item.strength
                            ? `— ${escapeHTML(item.strength)}`
                            : ""
                        }

                        × ${item.quantity}

                      </span>


                      <span>

                        ${formatPrice(
                          item.unit_price *
                          item.quantity
                        )}

                      </span>

                    </div>

                  `
                )

                .join("")}

            </div>


            <div class="order-total-row">

              <strong>
                Total
              </strong>

              <strong>
                ${formatPrice(order.total)}
              </strong>

            </div>

          </article>

        `
      )

      .join("");

}


/* =========================================================
   PROFILE / PASSWORD
========================================================= */

async function updateProfile(
  event
) {

  event.preventDefault();


  const name =
    document.getElementById(
      "profileName"
    ).value.trim();


  const phone =
    document.getElementById(
      "profilePhone"
    ).value.trim();


  const {
    data,
    error
  } =
    await supabaseClient

      .from(
        "profiles"
      )

      .update({

        full_name:
          name,

        phone:
          phone

      })

      .eq(
        "id",
        state.currentUser.id
      )

      .select()

      .single();


  if (
    error
  ) {

    showToast(
      error.message
    );

    return;

  }


  state.currentProfile =
    data;


  updateAccountUI();


  showToast(
    "Profile updated."
  );

}


async function changePassword(
  event
) {

  event.preventDefault();


  const current =
    document.getElementById(
      "currentPassword"
    ).value;


  const newPassword =
    document.getElementById(
      "newPassword"
    ).value;


  const {
    error:
      verificationError
  } =
    await supabaseClient.auth
      .signInWithPassword({

        email:
          state.currentUser.email,

        password:
          current

      });


  if (
    verificationError
  ) {

    showToast(
      "Current password is incorrect."
    );

    return;

  }


  const {
    error
  } =
    await supabaseClient.auth
      .updateUser({

        password:
          newPassword

      });


  if (
    error
  ) {

    showToast(
      error.message
    );

    return;

  }


  event.target.reset();


  showToast(
    "Password updated."
  );

}


/* =========================================================
   GALLERY
========================================================= */

const INITIAL_GALLERY_ITEMS =
  8;


function renderGallery() {

  const grid =
    document.getElementById(
      "galleryGrid"
    );


  if (
    !grid
  ) {

    return;

  }


  const visible =
    state.galleryExpanded

      ? galleryMedia

      : galleryMedia.slice(
          0,
          INITIAL_GALLERY_ITEMS
        );


  grid.innerHTML =
    visible

      .map(
        (
          item,
          index
        ) => {

          const featured =
            index === 0
              ? " gallery-large"
              : "";


          if (
            item.type ===
            "video"
          ) {

            return `

              <button
                class="gallery-item gallery-video-item${featured}"
                data-type="video"
                data-source="${escapeHTML(item.source)}"
                data-title="${escapeHTML(item.title)}"
              >

                <video
                  class="gallery-video-preview"
                  muted
                  playsinline
                  preload="metadata"
                >

                  <source
                    src="${escapeHTML(item.source)}"
                    type="video/mp4"
                  >

                </video>

                <span class="gallery-video-play">
                  ▶
                </span>

                <span class="gallery-overlay">

                  <strong>
                    ${escapeHTML(item.title)}
                  </strong>

                  <small>
                    Watch Video
                  </small>

                </span>

              </button>

            `;

          }


          return `

            <button
              class="gallery-item${featured}"
              data-type="image"
              data-source="${escapeHTML(item.source)}"
              data-title="${escapeHTML(item.title)}"
            >

              <img
                src="${escapeHTML(item.source)}"
                alt="${escapeHTML(item.title)}"
                loading="lazy"
              >

              <span class="gallery-overlay">

                <strong>
                  ${escapeHTML(item.title)}
                </strong>

                <small>
                  View Image
                </small>

              </span>

            </button>

          `;

        }
      )

      .join("");


  grid
    .querySelectorAll(
      ".gallery-item"
    )

    .forEach(
      item => {

        item.addEventListener(
          "click",
          () => {

            openGalleryViewer(

              item.dataset.type,

              item.dataset.source,

              item.dataset.title

            );

          }
        );

      }
    );


  const button =
    document.getElementById(
      "showMoreGallery"
    );


  if (
    button
  ) {

    button.hidden =
      galleryMedia.length <=
      INITIAL_GALLERY_ITEMS;


    button.textContent =
      state.galleryExpanded
        ? "Show Less"
        : "View More";

  }

}


function initializeGallery() {

  renderGallery();


  document.getElementById(
    "showMoreGallery"
  )
    ?.addEventListener(
      "click",
      () => {

        state.galleryExpanded =
          !state.galleryExpanded;


        renderGallery();

      }
    );

}


function openGalleryViewer(
  type,
  source,
  title
) {

  const viewer =
    document.createElement(
      "div"
    );


  viewer.className =
    "gallery-lightbox";


  const media =

    type ===
      "video"

      ? `

        <video
          class="gallery-lightbox-video"
          controls
          autoplay
          playsinline
        >

          <source
            src="${escapeHTML(source)}"
            type="video/mp4"
          >

        </video>

      `

      : `

        <img
          class="gallery-lightbox-image"
          src="${escapeHTML(source)}"
          alt="${escapeHTML(title)}"
        >

      `;


  viewer.innerHTML = `

    <div class="gallery-lightbox-content">

      <button
        class="gallery-lightbox-close"
      >
        ×
      </button>

      ${media}

      <h3>
        ${escapeHTML(title)}
      </h3>

    </div>

  `;


  document.body.appendChild(
    viewer
  );


  viewer
    .querySelector(
      ".gallery-lightbox-close"
    )

    .addEventListener(
      "click",
      () => {

        viewer.remove();

      }
    );


  viewer.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        viewer
      ) {

        viewer.remove();

      }

    }
  );

}


/* =========================================================
   REVIEWS
========================================================= */

function renderReviews() {

  const track =
    document.getElementById(
      "reviewTrack"
    );


  track.innerHTML =
    [
      ...reviews,
      ...reviews
    ]

      .map(
        review => `

          <article class="review-card">

            <div class="review-stars">
              ★★★★★
            </div>

            <blockquote>
              “${escapeHTML(review.text)}”
            </blockquote>

            <div class="reviewer">

              <div class="avatar">
                ${escapeHTML(review.initials)}
              </div>

              <div>

                <strong>
                  ${escapeHTML(review.initials)}
                </strong>

                <span>
                  ${escapeHTML(review.handle)}
                </span>

              </div>

            </div>

          </article>

        `
      )

      .join("");

}


/* =========================================================
   PANELS
========================================================= */

function closeSidePanels() {

  sideMenu
    ?.classList
    .remove(
      "open"
    );


  cartDrawer
    ?.classList
    .remove(
      "open"
    );


  pageOverlay
    ?.classList
    .remove(
      "show"
    );

}


function openSidePanel(
  panel
) {

  closeSidePanels();


  panel
    ?.classList
    .add(
      "open"
    );


  pageOverlay
    ?.classList
    .add(
      "show"
    );

}


/* =========================================================
   EVENTS
========================================================= */

function initializeEvents() {

  document.getElementById(
    "menuToggle"
  )
    ?.addEventListener(
      "click",
      () =>
        openSidePanel(
          sideMenu
        )
    );


  document.getElementById(
    "menuClose"
  )
    ?.addEventListener(
      "click",
      closeSidePanels
    );


  document.getElementById(
    "cartToggle"
  )
    ?.addEventListener(
      "click",
      () =>
        openSidePanel(
          cartDrawer
        )
    );


  document.getElementById(
    "cartClose"
  )
    ?.addEventListener(
      "click",
      closeSidePanels
    );


  pageOverlay
    ?.addEventListener(
      "click",
      closeSidePanels
    );


  document.getElementById(
    "accountHeaderButton"
  )
    ?.addEventListener(
      "click",
      () => {

        state.currentUser
          ? openDashboard()
          : openAccountModal();

      }
    );


  document.getElementById(
    "loginOpen"
  )
    ?.addEventListener(
      "click",
      () => {

        closeSidePanels();

        openAccountModal();

      }
    );


  document.getElementById(
    "myAccountMenuButton"
  )
    ?.addEventListener(
      "click",
      openDashboard
    );


  document.getElementById(
    "logoutMenuButton"
  )
    ?.addEventListener(
      "click",
      logoutUser
    );


  document.getElementById(
    "dashboardLogoutButton"
  )
    ?.addEventListener(
      "click",
      logoutUser
    );


  document.getElementById(
    "accountModalClose"
  )
    ?.addEventListener(
      "click",
      () =>
        accountModal.close()
    );


  document.getElementById(
    "dashboardClose"
  )
    ?.addEventListener(
      "click",
      () =>
        dashboardModal.close()
    );


  document.getElementById(
    "checkoutClose"
  )
    ?.addEventListener(
      "click",
      () =>
        checkoutModal.close()
    );


  document.getElementById(
    "loginForm"
  )
    ?.addEventListener(
      "submit",

      async event => {

        event.preventDefault();


        const success =
          await loginUser(

            document.getElementById(
              "loginEmail"
            ).value,

            document.getElementById(
              "loginPassword"
            ).value

          );


        if (
          success
        ) {

          accountModal.close();

        }

      }
    );


  document.getElementById(
    "registerForm"
  )
    ?.addEventListener(
      "submit",

      async event => {

        event.preventDefault();


        const password =
          document.getElementById(
            "registerPassword"
          ).value;


        const confirmation =
          document.getElementById(
            "registerConfirmPassword"
          ).value;


        if (
          password !==
          confirmation
        ) {

          showToast(
            "Passwords do not match."
          );

          return;

        }


        const success =
          await registerUser(

            document.getElementById(
              "registerName"
            ).value,

            document.getElementById(
              "registerEmail"
            ).value,

            document.getElementById(
              "registerPhone"
            ).value,

            password

          );


        if (
          success
        ) {

          accountModal.close();

        }

      }
    );


  document.getElementById(
    "showRegisterButton"
  )
    ?.addEventListener(
      "click",
      () => {

        document.getElementById(
          "loginView"
        ).classList.add(
          "hidden"
        );


        document.getElementById(
          "registerView"
        ).classList.remove(
          "hidden"
        );

      }
    );


  document.getElementById(
    "showLoginButton"
  )
    ?.addEventListener(
      "click",
      () => {

        document.getElementById(
          "registerView"
        ).classList.add(
          "hidden"
        );


        document.getElementById(
          "loginView"
        ).classList.remove(
          "hidden"
        );

      }
    );


  document.getElementById(
    "profileForm"
  )
    ?.addEventListener(
      "submit",
      updateProfile
    );


  document.getElementById(
    "passwordForm"
  )
    ?.addEventListener(
      "submit",
      changePassword
    );


  document.getElementById(
    "checkoutButton"
  )
    ?.addEventListener(
      "click",
      openCheckout
    );


  document.getElementById(
    "checkoutForm"
  )
    ?.addEventListener(
      "submit",
      submitOrder
    );


  document.getElementById(
    "viewOrderButton"
  )
    ?.addEventListener(
      "click",
      async () => {

        confirmationModal.close();

        await openDashboard();


        document
          .querySelector(
            '[data-tab="orders"]'
          )
          ?.click();

      }
    );


  document.getElementById(
    "continueShoppingButton"
  )
    ?.addEventListener(
      "click",
      () => {

        confirmationModal.close();


        document.getElementById(
          "shop"
        )
          ?.scrollIntoView(
            {
              behavior:
                "smooth"
            }
          );

      }
    );


  document.getElementById(
    "clearCart"
  )
    ?.addEventListener(
      "click",
      () => {

        state.cart =
          [];


        saveCart();


        renderCart();

      }
    );


  categoryFilter
    ?.addEventListener(
      "change",
      event => {

        state.category =
          event.target.value;


        renderProducts();

      }
    );


  globalSearch
    ?.addEventListener(
      "input",
      event => {

        state.search =
          event.target.value;


        state.showAll =
          true;


        renderProducts();

      }
    );


  showAllProducts
    ?.addEventListener(
      "click",
      () => {

        state.showAll =
          !state.showAll;


        renderProducts();

      }
    );


  document.getElementById(
    "searchToggle"
  )
    ?.addEventListener(
      "click",
      () => {

        searchPanel.classList.toggle(
          "open"
        );

      }
    );


  document.getElementById(
    "searchClose"
  )
    ?.addEventListener(
      "click",
      () => {

        searchPanel.classList.remove(
          "open"
        );

      }
    );


  document
    .querySelectorAll(
      ".dashboard-tab"
    )

    .forEach(
      tab => {

        tab.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".dashboard-tab"
              )

              .forEach(
                button =>
                  button.classList.remove(
                    "active"
                  )
              );


            document
              .querySelectorAll(
                ".dashboard-panel"
              )

              .forEach(
                panel =>
                  panel.classList.remove(
                    "active"
                  )
              );


            tab.classList.add(
              "active"
            );


            document.getElementById(
              `${tab.dataset.tab}Panel`
            )
              ?.classList
              .add(
                "active"
              );

          }
        );

      }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

async function initializeWebsite() {

  try {

    initializeEvents();

  } catch (
    error
  ) {

    console.error(
      "Events:",
      error
    );

  }


  try {

    initializeGallery();

  } catch (
    error
  ) {

    console.error(
      "Gallery:",
      error
    );

  }


  try {

    renderProducts();

  } catch (
    error
  ) {

    console.error(
      "Products:",
      error
    );

  }


  try {

    renderReviews();

  } catch (
    error
  ) {

    console.error(
      "Reviews:",
      error
    );

  }


  try {

    initializeAuthListener();


    await restoreSession();

  } catch (
    error
  ) {

    console.error(
      "Authentication:",
      error
    );

  }


  const year =
    document.getElementById(
      "currentYear"
    );


  if (
    year
  ) {

    year.textContent =
      new Date()
        .getFullYear();

  }

}


document.addEventListener(
  "DOMContentLoaded",
  initializeWebsite
);