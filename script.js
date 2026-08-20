/* =========================================================
   HEALTHCARE PHARMACEUTICALS
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

/*
   KEEP YOUR CURRENT WORKING VALUES HERE.

   DO NOT USE:
   service_role
   sb_secret_

   Use your browser-safe publishable key.
*/

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
      "",

    description:
      "Available in multiple strengths.",

    badge:
      "Available",

    dosages: [

      {
        strength:
          "2.5 mg",

        price:
          150
      },

      {
        strength:
          "5 mg",

        price:
          200
      },

      {
        strength:
          "7.5 mg",

        price:
          250
      },

      {
        strength:
          "10 mg",

        price:
          300
      },

      {
        strength:
          "12.5 mg",

        price:
          400
      },

      {
        strength:
          "15 mg",

        price:
          450
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
        strength:
          "0.25 mg",

        price:
          100
      },

      {
        strength:
          "0.5 mg",

        price:
          130
      },

      {
        strength:
          "1 mg",

        price:
          150
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
        strength:
          "0.25 mg",

        price:
          199
      },

      {
        strength:
          "0.5 mg",

        price:
          199
      },

      {
        strength:
          "1 mg",

        price:
          249
      },

      {
        strength:
          "1.7 mg",

        price:
          299
      },

      {
        strength:
          "2.4 mg",

        price:
          349
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
        strength:
          "0.6 mg",

        price:
          150
      },

      {
        strength:
          "1.2 mg",

        price:
          175
      },

      {
        strength:
          "1.8 mg",

        price:
          200
      },

      {
        strength:
          "2.4 mg",

        price:
          225
      },

      {
        strength:
          "3 mg",

        price:
          250
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

    video:
      "",

    description:
      "NAD+ product listed in our catalog.",

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

    video:
      "",

    description:
      "GHK-Cu product listed in our catalog.",

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

    video:
      "",

    description:
      "BPC product listed in our catalog.",

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

    video:
      "",

    description:
      "CJC product listed in our catalog.",

    badge:
      "Available"
  }

];


/* =========================================================
   GALLERY MEDIA

   ADD EVERY IMAGE / VIDEO HERE.

   Because your screenshot truncates several IMG/VID filenames,
   replace the examples below with the EXACT complete filenames
   visible in your assets/gallery folder.
========================================================= */

const galleryMedia = [

  /* ---------- CURRENT KNOWN IMAGES ---------- */

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


  /* ---------- CURRENT KNOWN VIDEOS ---------- */

  
  
  
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0048.mp4",

    title:
      "Inventory Description"
  }
  ,
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0047.mp4",

    title:
      "Inventory Description"
  }
  ,
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0046.mp4",

    title:
      "Inventory Description"
  }
  ,
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0045.mp4",

    title:
      "Inventory Description"
  }
  ,
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0044.mp4",

    title:
      "Inventory Description"
  }
  ,
  {
    type:
      "video",

    source:
      "assets/gallery/VID-20260727-WA0043.mp4",

    title:
      "Inventory Description"
  }

  



  /*
     ======================================================
     ADD THE REST OF YOUR REAL FILES LIKE THIS:

     ,
     {
       type: "image",
       source: "assets/gallery/IMG-20260727-WA0001.jpg",
       title: "Product Gallery"
     }

     ,
     {
       type: "video",
       source: "assets/gallery/VID-20260727-WA0001.mp4",
       title: "Product Video"
     }

     ======================================================
  */

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
      "Love that priority shipping is free on all orders, no minimums and no surprise fees at checkout. Made me a repeat customer.",

    initials:
      "NV",

    handle:
      "@nina.volkov"
  },


  {
    text:
      "Genuinely the most affordable pricing I've found anywhere, and the quality didn't drop to match it.",

    initials:
      "MD",

    handle:
      "@marcus.delgado"
  },


  {
    text:
      "Ryan in customer service is awesome. He patiently answered every question I had.",

    initials:
      "HC",

    handle:
      "@hannahcole"
  },


  {
    text:
      "Free priority shipping that actually shows up fast. Can't beat it.",

    initials:
      "DP",

    handle:
      "@devin_park"
  },


  {
    text:
      "Eight separate tests on every batch. That level of verification is the whole reason I moved my orders here.",

    initials:
      "EM",

    handle:
      "@elena.marsh"
  },


  {
    text:
      "The packaging was super secure. Everything arrived sealed, padded, and completely intact in transit.",

    initials:
      "OB",

    handle:
      "@obrennan"
  },


  {
    text:
      "Easiest site I've ever ordered from. In and out in two minutes.",

    initials:
      "RP",

    handle:
      "@rajpatel"
  },


  {
    text:
      "The 8x testing sold me instantly.",

    initials:
      "PU",

    handle:
      "@purityhound"
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
   DOM REFERENCES
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


const searchPanel =
  document.getElementById(
    "searchPanel"
  );


const accountModal =
  document.getElementById(
    "accountModal"
  );


const dashboardModal =
  document.getElementById(
    "dashboardModal"
  );


const toast =
  document.getElementById(
    "toast"
  );


/* =========================================================
   HELPERS
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
        word.charAt(0)
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
   SUPABASE PROFILE
========================================================= */

async function loadUserProfile() {

  if (
    !state.currentUser
  ) {

    state.currentProfile =
      null;


    return null;

  }


  try {

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


      return null;

    }


    state.currentProfile =
      data;


    return data;

  } catch (
    error
  ) {

    console.error(
      "Profile load failed:",
      error
    );


    return null;

  }

}


/* =========================================================
   TAWK.TO VISITOR NAME + EMAIL
========================================================= */

async function updateTawkVisitor() {

  if (
    !state.currentUser
  ) {

    return;

  }


  const customerName =
    state.currentProfile
      ?.full_name ||

    state.currentUser
      ?.user_metadata
      ?.full_name ||

    "Customer";


  const customerEmail =
    state.currentUser
      ?.email ||
    "";


  const setTawkIdentity =
    () => {

      if (
        window.Tawk_API &&
        typeof window.Tawk_API
          .setAttributes ===
          "function"
      ) {

        window.Tawk_API
          .setAttributes(

            {
              name:
                customerName,

              email:
                customerEmail
            },

            error => {

              if (
                error
              ) {

                console.error(
                  "Tawk identity error:",
                  error
                );

              } else {

                console.log(
                  "Tawk customer identified:",
                  customerName
                );

              }

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

    setTawkIdentity();

  } else {

    window.Tawk_API =
      window.Tawk_API ||
      {};


    const previousOnLoad =
      window.Tawk_API
        .onLoad;


    window.Tawk_API
      .onLoad =
      function () {

        if (
          typeof previousOnLoad ===
          "function"
        ) {

          previousOnLoad();

        }


        setTawkIdentity();

      };

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

  try {

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

      showToast(
        error.message
      );


      return false;

    }


    if (
      data.user &&
      !data.session
    ) {

      showToast(
        "Account created. Check your email to confirm your account."
      );

    } else {

      state.currentUser =
        data.user;


      await loadUserProfile();


      loadCart();


      updateAccountUI();


      renderCart();


      await updateTawkVisitor();


      showToast(
        "Account created successfully."
      );

    }


    return true;

  } catch (
    error
  ) {

    console.error(
      "Registration error:",
      error
    );


    showToast(
      "Unable to create account."
    );


    return false;

  }

}


/* =========================================================
   LOGIN
========================================================= */

async function loginUser(
  email,
  password
) {

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
          .toLowerCase()
          .includes(
            "email not confirmed"
          )
      ) {

        showToast(
          "Please confirm your email before logging in."
        );

      } else {

        showToast(
          error.message
        );

      }


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

  } catch (
    error
  ) {

    console.error(
      "Login failed:",
      error
    );


    showToast(
      "Unable to log in."
    );


    return false;

  }

}


/* =========================================================
   LOGOUT
========================================================= */

async function logoutUser() {

  try {

    saveCart();


    const {
      error
    } =
      await supabaseClient.auth
        .signOut();


    if (
      error
    ) {

      showToast(
        error.message
      );


      return;

    }


    state.currentUser =
      null;


    state.currentProfile =
      null;


    state.cart =
      [];


    loadCart();


    updateAccountUI();


    renderCart();


    if (
      dashboardModal
        ?.open
    ) {

      dashboardModal.close();

    }


    closeSidePanels();


    showToast(
      "You have been logged out."
    );

  } catch (
    error
  ) {

    console.error(
      "Logout error:",
      error
    );

  }

}


/* =========================================================
   RESTORE SESSION
========================================================= */

async function restoreSession() {

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


      loadCart();


      return;

    }


    if (
      data.session
    ) {

      state.currentUser =
        data.session.user;


      await loadUserProfile();


      await updateTawkVisitor();

    } else {

      state.currentUser =
        null;


      state.currentProfile =
        null;

    }


    loadCart();


    updateAccountUI();


    renderCart();

  } catch (
    error
  ) {

    console.error(
      "Session restore error:",
      error
    );


    loadCart();

  }

}


/* =========================================================
   AUTH LISTENER
========================================================= */

function initializeAuthListener() {

  supabaseClient.auth
    .onAuthStateChange(

      async (
        event,
        session
      ) => {

        console.log(
          "Supabase auth event:",
          event
        );


        if (
          session
        ) {

          state.currentUser =
            session.user;


          await loadUserProfile();


          await updateTawkVisitor();

        } else {

          state.currentUser =
            null;


          state.currentProfile =
            null;

        }


        loadCart();


        updateAccountUI();


        renderCart();

      }

    );

}


/* =========================================================
   ACCOUNT UI
========================================================= */

function updateAccountUI() {

  const userCard =
    document.getElementById(
      "menuUserCard"
    );


  const loginButton =
    document.getElementById(
      "loginOpen"
    );


  const logoutButton =
    document.getElementById(
      "logoutMenuButton"
    );


  const accountButton =
    document.getElementById(
      "myAccountMenuButton"
    );


  const onlineDot =
    document.getElementById(
      "accountOnlineDot"
    );


  if (
    state.currentUser
  ) {

    const displayName =
      state.currentProfile
        ?.full_name ||

      state.currentUser
        ?.user_metadata
        ?.full_name ||

      "Customer";


    userCard
      ?.classList
      .add(
        "active"
      );


    loginButton
      ?.classList
      .add(
        "hidden-login"
      );


    logoutButton
      ?.classList
      .add(
        "active"
      );


    accountButton
      ?.classList
      .add(
        "active"
      );


    onlineDot
      ?.classList
      .add(
        "active"
      );


    const nameElement =
      document.getElementById(
        "menuUserName"
      );


    const emailElement =
      document.getElementById(
        "menuUserEmail"
      );


    const avatarElement =
      document.getElementById(
        "menuUserAvatar"
      );


    if (
      nameElement
    ) {

      nameElement.textContent =
        displayName;

    }


    if (
      emailElement
    ) {

      emailElement.textContent =
        state.currentUser.email ||
        "";

    }


    if (
      avatarElement
    ) {

      avatarElement.textContent =
        getInitials(
          displayName
        );

    }

  } else {

    userCard
      ?.classList
      .remove(
        "active"
      );


    loginButton
      ?.classList
      .remove(
        "hidden-login"
      );


    logoutButton
      ?.classList
      .remove(
        "active"
      );


    accountButton
      ?.classList
      .remove(
        "active"
      );


    onlineDot
      ?.classList
      .remove(
        "active"
      );

  }

}


/* =========================================================
   ACCOUNT MODAL
========================================================= */

function openAccountModal() {

  const modal =
    document.getElementById(
      "accountModal"
    );


  const loginView =
    document.getElementById(
      "loginView"
    );


  const registerView =
    document.getElementById(
      "registerView"
    );


  if (
    !modal
  ) {

    console.error(
      "accountModal not found."
    );


    return;

  }


  loginView
    ?.classList
    .remove(
      "hidden"
    );


  registerView
    ?.classList
    .add(
      "hidden"
    );


  if (
    !modal.open
  ) {

    modal.showModal();

  }

}


/* =========================================================
   DASHBOARD
========================================================= */

async function openDashboard() {

  if (
    !state.currentUser
  ) {

    openAccountModal();


    return;

  }


  await loadUserProfile();


  const displayName =
    state.currentProfile
      ?.full_name ||

    state.currentUser
      ?.user_metadata
      ?.full_name ||

    "Customer";


  const dashboardName =
    document.getElementById(
      "dashboardName"
    );


  const dashboardEmail =
    document.getElementById(
      "dashboardEmail"
    );


  const dashboardAvatar =
    document.getElementById(
      "dashboardAvatar"
    );


  const profileName =
    document.getElementById(
      "profileName"
    );


  const profileEmail =
    document.getElementById(
      "profileEmail"
    );


  const profilePhone =
    document.getElementById(
      "profilePhone"
    );


  if (
    dashboardName
  ) {

    dashboardName.textContent =
      displayName;

  }


  if (
    dashboardEmail
  ) {

    dashboardEmail.textContent =
      state.currentUser.email ||
      "";

  }


  if (
    dashboardAvatar
  ) {

    dashboardAvatar.textContent =
      getInitials(
        displayName
      );

  }


  if (
    profileName
  ) {

    profileName.value =
      state.currentProfile
        ?.full_name ||
      "";

  }


  if (
    profileEmail
  ) {

    profileEmail.value =
      state.currentUser.email ||
      "";

  }


  if (
    profilePhone
  ) {

    profilePhone.value =
      state.currentProfile
        ?.phone ||
      "";

  }


  await renderOrderHistory();


  if (
    dashboardModal &&
    !dashboardModal.open
  ) {

    dashboardModal.showModal();

  }

}


/* =========================================================
   UPDATE PROFILE
========================================================= */

async function updateProfile(
  name,
  phone
) {

  if (
    !state.currentUser
  ) {

    return false;

  }


  try {

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
            name.trim(),

          phone:
            phone.trim(),

          updated_at:
            new Date()
              .toISOString()

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


      return false;

    }


    state.currentProfile =
      data;


    await supabaseClient.auth
      .updateUser({

        data: {

          full_name:
            name.trim(),

          phone:
            phone.trim()

        }

      });


    updateAccountUI();


    await updateTawkVisitor();


    showToast(
      "Profile updated."
    );


    return true;

  } catch (
    error
  ) {

    console.error(
      "Profile update error:",
      error
    );


    return false;

  }

}


/* =========================================================
   CHANGE PASSWORD
========================================================= */

async function changePassword(
  currentPassword,
  newPassword
) {

  if (
    !state.currentUser
  ) {

    return false;

  }


  if (
    newPassword.length <
    6
  ) {

    showToast(
      "New password must contain at least 6 characters."
    );


    return false;

  }


  const {
    error:
      verifyError
  } =
    await supabaseClient.auth
      .signInWithPassword({

        email:
          state.currentUser.email,

        password:
          currentPassword

      });


  if (
    verifyError
  ) {

    showToast(
      "Current password is incorrect."
    );


    return false;

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


    return false;

  }


  showToast(
    "Password changed successfully."
  );


  return true;

}


/* =========================================================
   FORGOT PASSWORD
========================================================= */

async function sendPasswordReset() {

  const email =
    document.getElementById(
      "loginEmail"
    )
      ?.value
      ?.trim();


  if (
    !email
  ) {

    showToast(
      "Enter your email address first."
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
            window.location.origin +
            "/reset-password.html"
        }

      );


  if (
    error
  ) {

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
   CART STORAGE
========================================================= */

function getCartKey() {

  if (
    state.currentUser
  ) {

    return (
      "hp-cart-" +
      state.currentUser.id
    );

  }


  return "hp-guest-cart";

}


function loadCart() {

  try {

    state.cart =
      JSON.parse(
        localStorage.getItem(
          getCartKey()
        )
      ) || [];

  } catch (
    error
  ) {

    console.error(
      "Cart load error:",
      error
    );


    state.cart =
      [];

  }

}


function saveCart() {

  try {

    localStorage.setItem(

      getCartKey(),

      JSON.stringify(
        state.cart
      )

    );

  } catch (
    error
  ) {

    console.error(
      "Cart save error:",
      error
    );

  }

}


/* =========================================================
   PRODUCTS FILTER
========================================================= */

function getVisibleProducts() {

  const query =
    state.search
      .trim()
      .toLowerCase();


  return products.filter(
    product => {

      const categoryMatch =

        state.category ===
          "all" ||

        product.category ===
          state.category;


      const text =

        (
          product.name +
          " " +
          product.description +
          " " +
          product.categoryLabel
        )

          .toLowerCase();


      const searchMatch =

        !query ||

        text.includes(
          query
        );


      return (
        categoryMatch &&
        searchMatch
      );

    }
  );

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(
  product
) {

  let mediaHTML;


  if (
    product.image
  ) {

    mediaHTML = `

      <div class="product-media">

        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >


        ${
          product.video

            ? `

              <button
                class="watch-video-btn"
                type="button"
                data-video="${escapeHTML(product.video)}"
                data-product-name="${escapeHTML(product.name)}"
              >
                ▶ Watch Video
              </button>

            `

            : ""
        }

      </div>

    `;

  } else {

    mediaHTML = `

      <div class="product-visual">

        <div class="product-placeholder">

          <div style="font-size:45px;">
            🧪
          </div>

          <span>
            Product Image
          </span>

        </div>

      </div>

    `;

  }


  let dosageHTML =
    "";


  let displayedPrice =
    product.price;


  if (
    product.dosages &&
    product.dosages.length
  ) {

    displayedPrice =
      product.dosages[0]
        .price;


    dosageHTML = `

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

    `;

  }


  return `

    <article class="product-card">

      <span class="product-badge">
        ${escapeHTML(product.badge)}
      </span>


      ${mediaHTML}


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

            ${formatPrice(displayedPrice)}

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


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  if (
    !productGrid
  ) {

    console.warn(
      "productGrid not found."
    );


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


  if (
    displayed.length ===
    0
  ) {

    productGrid.innerHTML = `

      <div class="no-products">

        No products match your search.

      </div>

    `;

  } else {

    productGrid.innerHTML =
      displayed

        .map(
          createProductCard
        )

        .join("");

  }


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


  productGrid
    .querySelectorAll(
      ".watch-video-btn"
    )

    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            openProductVideo(

              button.dataset
                .video,

              button.dataset
                .productName

            );

          }
        );

      }
    );


  initializeDosageSelectors();

}


/* =========================================================
   DOSAGE SELECTORS
========================================================= */

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


            const selected =
              select.options[
                select.selectedIndex
              ];


            const price =
              Number(
                selected.dataset
                  .price
              );


            const priceElement =
              document.getElementById(
                `price-${productId}`
              );


            if (
              priceElement
            ) {

              priceElement.textContent =
                formatPrice(
                  price
                );

            }

          }
        );

      }
    );

}


/* =========================================================
   PRODUCT VIDEO
========================================================= */

function openProductVideo(
  videoURL,
  productName
) {

  document.getElementById(
    "productVideoModal"
  )
    ?.remove();


  const modal =
    document.createElement(
      "div"
    );


  modal.id =
    "productVideoModal";


  modal.className =
    "video-modal";


  modal.innerHTML = `

    <div class="video-modal-content glass-card">

      <button
        class="video-close"
        type="button"
      >
        ×
      </button>


      <h3>

        ${escapeHTML(productName)}

      </h3>


      <video
        controls
        autoplay
        playsinline
        preload="metadata"
      >

        <source
          src="${escapeHTML(videoURL)}"
          type="video/mp4"
        >

      </video>

    </div>

  `;


  document.body.appendChild(
    modal
  );


  document.body.classList.add(
    "no-scroll"
  );


  function closeVideo() {

    modal
      .querySelector(
        "video"
      )
      ?.pause();


    modal.remove();


    document.body.classList.remove(
      "no-scroll"
    );

  }


  modal
    .querySelector(
      ".video-close"
    )
    ?.addEventListener(
      "click",
      closeVideo
    );


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        modal
      ) {

        closeVideo();

      }

    }
  );

}


/* =========================================================
   GALLERY
========================================================= */

const INITIAL_GALLERY_ITEMS =
  8;


function renderGallery() {

  const galleryGrid =
    document.getElementById(
      "galleryGrid"
    );


  const showMoreButton =
    document.getElementById(
      "showMoreGallery"
    );


  if (
    !galleryGrid
  ) {

    console.warn(
      "galleryGrid not found."
    );


    return;

  }


  const items =
    state.galleryExpanded

      ? galleryMedia

      : galleryMedia.slice(
          0,
          INITIAL_GALLERY_ITEMS
        );


  galleryGrid.innerHTML =
    items

      .map(
        (
          item,
          index
        ) => {

          let layoutClass =
            "";


          if (
            index === 0
          ) {

            layoutClass =
              " gallery-large";

          } else if (
            index === 5
          ) {

            layoutClass =
              " gallery-wide";

          }


          if (
            item.type ===
            "video"
          ) {

            return `

              <button
                class="gallery-item gallery-video-item${layoutClass}"
                type="button"
                data-gallery-type="video"
                data-gallery-source="${escapeHTML(item.source)}"
                data-gallery-title="${escapeHTML(item.title)}"
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
              class="gallery-item${layoutClass}"
              type="button"
              data-gallery-type="image"
              data-gallery-source="${escapeHTML(item.source)}"
              data-gallery-title="${escapeHTML(item.title)}"
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


  galleryGrid
    .querySelectorAll(
      ".gallery-item"
    )

    .forEach(
      item => {

        item.addEventListener(
          "click",
          () => {

            openGalleryViewer(

              item.dataset
                .galleryType,

              item.dataset
                .gallerySource,

              item.dataset
                .galleryTitle

            );

          }
        );

      }
    );


  if (
    showMoreButton
  ) {

    if (
      galleryMedia.length <=
      INITIAL_GALLERY_ITEMS
    ) {

      showMoreButton.hidden =
        true;

    } else {

      showMoreButton.hidden =
        false;


      showMoreButton.textContent =
        state.galleryExpanded

          ? "Show Less"

          : "View More";

    }

  }

}


/* =========================================================
   INITIALIZE GALLERY
========================================================= */

function initializeGallery() {

  renderGallery();


  const showMoreButton =
    document.getElementById(
      "showMoreGallery"
    );


  if (
    !showMoreButton
  ) {

    return;

  }


  showMoreButton.addEventListener(
    "click",
    () => {

      state.galleryExpanded =
        !state.galleryExpanded;


      renderGallery();


      if (
        !state.galleryExpanded
      ) {

        document.getElementById(
          "gallery"
        )
          ?.scrollIntoView(
            {
              behavior:
                "smooth",

              block:
                "start"
            }
          );

      }

    }
  );

}


/* =========================================================
   GALLERY VIEWER
========================================================= */

function openGalleryViewer(
  mediaType,
  mediaSource,
  title
) {

  document.getElementById(
    "galleryLightbox"
  )
    ?.remove();


  const viewer =
    document.createElement(
      "div"
    );


  viewer.id =
    "galleryLightbox";


  viewer.className =
    "gallery-lightbox";


  let mediaHTML;


  if (
    mediaType ===
    "video"
  ) {

    mediaHTML = `

      <video
        class="gallery-lightbox-video"
        controls
        autoplay
        playsinline
        preload="metadata"
      >

        <source
          src="${escapeHTML(mediaSource)}"
          type="video/mp4"
        >

        Your browser does not support video playback.

      </video>

    `;

  } else {

    mediaHTML = `

      <img
        class="gallery-lightbox-image"
        src="${escapeHTML(mediaSource)}"
        alt="${escapeHTML(title)}"
      >

    `;

  }


  viewer.innerHTML = `

    <div class="gallery-lightbox-content">

      <button
        class="gallery-lightbox-close"
        type="button"
      >
        ×
      </button>


      ${mediaHTML}


      <div class="gallery-lightbox-title">

        ${escapeHTML(title)}

      </div>

    </div>

  `;


  document.body.appendChild(
    viewer
  );


  document.body.classList.add(
    "no-scroll"
  );


  function closeViewer() {

    viewer
      .querySelector(
        "video"
      )
      ?.pause();


    viewer.remove();


    document.body.classList.remove(
      "no-scroll"
    );


    document.removeEventListener(
      "keydown",
      handleEscape
    );

  }


  function handleEscape(
    event
  ) {

    if (
      event.key ===
      "Escape"
    ) {

      closeViewer();

    }

  }


  viewer
    .querySelector(
      ".gallery-lightbox-close"
    )
    ?.addEventListener(
      "click",
      closeViewer
    );


  viewer.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        viewer
      ) {

        closeViewer();

      }

    }
  );


  document.addEventListener(
    "keydown",
    handleEscape
  );

}


/* =========================================================
   ADD TO CART
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

    const selector =
      document.getElementById(
        `dose-${productId}`
      );


    if (
      selector
    ) {

      const selected =
        selector.options[
          selector.selectedIndex
        ];


      strength =
        selected.value;


      price =
        Number(
          selected.dataset
            .price
        );

    }

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

    existing.quantity +=
      1;

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
        price,

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


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  if (
    !cartItems ||
    !cartCount ||
    !cartSubtotal ||
    !cartSummary ||
    !cartEmpty
  ) {

    return;

  }


  const totalItems =
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
    state.cart.reduce(

      (
        total,
        item
      ) =>

        total +
        item.price *
        item.quantity,

      0

    );


  cartCount.textContent =
    totalItems;


  cartSubtotal.textContent =
    formatPrice(
      subtotal
    );


  if (
    state.cart.length ===
    0
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

                  ? `

                    <p>

                      ${escapeHTML(item.strength)}

                    </p>

                  `

                  : ""
              }


              <p>

                ${formatPrice(item.price)}

              </p>


              <div class="quantity-control">

                <button
                  type="button"
                  data-action="minus"
                  data-key="${escapeHTML(item.cartKey)}"
                >
                  −
                </button>


                <span>

                  ${item.quantity}

                </span>


                <button
                  type="button"
                  data-action="plus"
                  data-key="${escapeHTML(item.cartKey)}"
                >
                  +
                </button>

              </div>

            </div>


            <button
              class="remove-item"
              type="button"
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


/* =========================================================
   CART QUANTITY
========================================================= */

function updateCartItem(
  key,
  action
) {

  const item =
    state.cart.find(
      entry =>
        entry.cartKey ===
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

    item.quantity +=
      1;

  }


  if (
    action ===
    "minus"
  ) {

    item.quantity -=
      1;

  }


  if (
    action ===
      "remove" ||

    item.quantity <=
      0
  ) {

    state.cart =
      state.cart.filter(
        entry =>
          entry.cartKey !==
          key
      );

  }


  saveCart();


  renderCart();

}


/* =========================================================
   ORDER NUMBER
========================================================= */

function generateOrderNumber() {

  const timestamp =
    Date.now()
      .toString()
      .slice(
        -8
      );


  const random =
    Math.floor(
      Math.random() *
      900 +
      100
    );


  return (
    "HP-" +
    timestamp +
    "-" +
    random
  );

}


/* =========================================================
   CHECKOUT
========================================================= */

async function checkout() {

  if (
    state.cart.length ===
    0
  ) {

    showToast(
      "Your cart is empty."
    );


    return;

  }


  if (
    !state.currentUser
  ) {

    showToast(
      "Please log in before checkout."
    );


    closeSidePanels();


    openAccountModal();


    return;

  }


  const subtotal =
    state.cart.reduce(

      (
        total,
        item
      ) =>

        total +
        item.price *
        item.quantity,

      0

    );


  const shipping =
    0;


  const tax =
    0;


  const total =
    subtotal +
    shipping +
    tax;


  const orderNumber =
    generateOrderNumber();


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

        .insert({

          user_id:
            state.currentUser.id,

          order_number:
            orderNumber,

          subtotal:
            subtotal,

          shipping:
            shipping,

          tax:
            tax,

          total:
            total,

          status:
            "Pending"

        })

        .select()

        .single();


    if (
      orderError
    ) {

      console.error(
        "Order creation error:",
        orderError
      );


      showToast(
        "Unable to create order."
      );


      return;

    }


    const orderItems =
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
          orderItems
        );


    if (
      itemError
    ) {

      console.error(
        "Order item error:",
        itemError
      );


      showToast(
        "Order created, but products could not be saved."
      );


      return;

    }


    state.cart =
      [];


    saveCart();


    renderCart();


    closeSidePanels();


    showToast(
      `Order ${orderNumber} created successfully.`
    );


    await renderOrderHistory();

  } catch (
    error
  ) {

    console.error(
      "Checkout error:",
      error
    );


    showToast(
      "Something went wrong while creating your order."
    );

  }

}


/* =========================================================
   ORDER HISTORY
========================================================= */

async function renderOrderHistory() {

  const container =
    document.getElementById(
      "orderHistory"
    );


  if (
    !container
  ) {

    return;

  }


  if (
    !state.currentUser
  ) {

    container.innerHTML = `

      <div class="empty-orders">

        Please log in to view your orders.

      </div>

    `;


    return;

  }


  container.innerHTML = `

    <div class="empty-orders">

      Loading orders...

    </div>

  `;


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
        subtotal,
        shipping,
        tax,
        total,
        status,
        created_at,
        order_items (
          id,
          product_name,
          strength,
          quantity,
          unit_price,
          line_total
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

    console.error(
      "Order history error:",
      error
    );


    container.innerHTML = `

      <div class="empty-orders">

        Unable to load orders.

      </div>

    `;


    return;

  }


  if (
    !orders ||
    orders.length ===
      0
  ) {

    container.innerHTML = `

      <div class="empty-orders">

        You have no orders yet.

      </div>

    `;


    return;

  }


  container.innerHTML =
    orders

      .map(

        order => `

          <article
            class="account-order-card glass-card"
          >

            <div class="order-card-header">

              <div>

                <span class="eyebrow">
                  Order
                </span>

                <h4>

                  ${escapeHTML(order.order_number)}

                </h4>

              </div>


              <span class="order-status">

                ${escapeHTML(order.status)}

              </span>

            </div>


            <div class="order-date">

              ${new Date(
                order.created_at
              ).toLocaleString()}

            </div>


            <div class="order-products">

              ${(
                order.order_items ||
                []
              )

                .map(

                  item => `

                    <div class="order-product-row">

                      <div>

                        <strong>

                          ${escapeHTML(item.product_name)}

                        </strong>


                        ${
                          item.strength

                            ? `

                              <span>

                                ${escapeHTML(item.strength)}

                              </span>

                            `

                            : ""
                        }

                      </div>


                      <div>

                        ${item.quantity}
                        ×
                        ${formatPrice(item.unit_price)}

                      </div>

                    </div>

                  `

                )

                .join("")}

            </div>


            <div class="order-total-row">

              <span>
                Total
              </span>

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
   MOVING REVIEWS
========================================================= */

function renderReviews() {

  const track =
    document.getElementById(
      "reviewTrack"
    );


  if (
    !track
  ) {

    console.warn(
      "reviewTrack not found."
    );


    return;

  }


  /*
     We duplicate the reviews so the CSS animation
     can loop continuously.
  */

  const movingReviews =
    [
      ...reviews,
      ...reviews
    ];


  track.innerHTML =
    movingReviews

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
   SIDE PANELS
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


  document.body.classList.remove(
    "no-scroll"
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


  document.body.classList.add(
    "no-scroll"
  );

}


/* =========================================================
   WEBSITE EVENTS
========================================================= */

function initializeEvents() {

  /* MENU */

  document.getElementById(
    "menuToggle"
  )
    ?.addEventListener(
      "click",
      () => {

        openSidePanel(
          sideMenu
        );

      }
    );


  document.getElementById(
    "menuClose"
  )
    ?.addEventListener(
      "click",
      closeSidePanels
    );


  /* CART */

  document.getElementById(
    "cartToggle"
  )
    ?.addEventListener(
      "click",
      () => {

        openSidePanel(
          cartDrawer
        );

      }
    );


  document.getElementById(
    "cartClose"
  )
    ?.addEventListener(
      "click",
      closeSidePanels
    );


  document.getElementById(
    "cartShopLink"
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


  /* ACCOUNT HEADER */

  document.getElementById(
    "accountHeaderButton"
  )
    ?.addEventListener(
      "click",
      () => {

        if (
          state.currentUser
        ) {

          openDashboard();

        } else {

          openAccountModal();

        }

      }
    );


  /* SIDE MENU LOGIN */

  document.getElementById(
    "loginOpen"
  )
    ?.addEventListener(
      "click",
      () => {

        closeSidePanels();


        setTimeout(
          openAccountModal,
          100
        );

      }
    );


  /* MY ACCOUNT */

  document.getElementById(
    "myAccountMenuButton"
  )
    ?.addEventListener(
      "click",
      () => {

        closeSidePanels();


        if (
          state.currentUser
        ) {

          openDashboard();

        } else {

          openAccountModal();

        }

      }
    );


  /* LOGOUT */

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


  /* CLOSE MODALS */

  document.getElementById(
    "accountModalClose"
  )
    ?.addEventListener(
      "click",
      () => {

        accountModal
          ?.close();

      }
    );


  document.getElementById(
    "dashboardClose"
  )
    ?.addEventListener(
      "click",
      () => {

        dashboardModal
          ?.close();

      }
    );


  /* LOGIN */

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

          event.target.reset();


          accountModal
            ?.close();

        }

      }

    );


  /* REGISTER */

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

          event.target.reset();


          accountModal
            ?.close();

        }

      }

    );


  /* SWITCH AUTH VIEWS */

  document.getElementById(
    "showRegisterButton"
  )
    ?.addEventListener(
      "click",
      () => {

        document.getElementById(
          "loginView"
        )
          ?.classList
          .add(
            "hidden"
          );


        document.getElementById(
          "registerView"
        )
          ?.classList
          .remove(
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
        )
          ?.classList
          .add(
            "hidden"
          );


        document.getElementById(
          "loginView"
        )
          ?.classList
          .remove(
            "hidden"
          );

      }
    );


  /* FORGOT PASSWORD */

  document.getElementById(
    "forgotPasswordButton"
  )
    ?.addEventListener(
      "click",
      sendPasswordReset
    );


  /* PROFILE */

  document.getElementById(
    "profileForm"
  )
    ?.addEventListener(
      "submit",

      async event => {

        event.preventDefault();


        await updateProfile(

          document.getElementById(
            "profileName"
          ).value,

          document.getElementById(
            "profilePhone"
          ).value

        );

      }

    );


  /* PASSWORD */

  document.getElementById(
    "passwordForm"
  )
    ?.addEventListener(
      "submit",

      async event => {

        event.preventDefault();


        const success =
          await changePassword(

            document.getElementById(
              "currentPassword"
            ).value,

            document.getElementById(
              "newPassword"
            ).value

          );


        if (
          success
        ) {

          event.target.reset();

        }

      }

    );


  /* DELETE ACCOUNT */

  document.getElementById(
    "deleteAccountButton"
  )
    ?.addEventListener(
      "click",
      () => {

        showToast(
          "Secure account deletion requires the server-side deletion function."
        );

      }
    );


  /* DASHBOARD TABS */

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
                button => {

                  button.classList.remove(
                    "active"
                  );

                }
              );


            document
              .querySelectorAll(
                ".dashboard-panel"
              )

              .forEach(
                panel => {

                  panel.classList.remove(
                    "active"
                  );

                }
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


  /* SEARCH */

  document.getElementById(
    "searchToggle"
  )
    ?.addEventListener(
      "click",
      () => {

        searchPanel
          ?.classList
          .toggle(
            "open"
          );


        globalSearch
          ?.focus();

      }
    );


  document.getElementById(
    "searchClose"
  )
    ?.addEventListener(
      "click",
      () => {

        searchPanel
          ?.classList
          .remove(
            "open"
          );

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


  /* CATEGORY FILTER */

  categoryFilter
    ?.addEventListener(
      "change",
      event => {

        state.category =
          event.target.value;


        state.showAll =
          false;


        renderProducts();

      }
    );


  /* SHOW ALL PRODUCTS */

  showAllProducts
    ?.addEventListener(
      "click",
      () => {

        state.showAll =
          !state.showAll;


        renderProducts();

      }
    );


  /* CLEAR CART */

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


        showToast(
          "Cart cleared."
        );

      }
    );


  /* CHECKOUT */

  document.getElementById(
    "checkoutButton"
  )
    ?.addEventListener(
      "click",
      checkout
    );


  /* CLOSE MENU WHEN LINK CLICKED */

  sideMenu
    ?.querySelectorAll(
      "a"
    )

    .forEach(
      link => {

        link.addEventListener(
          "click",
          closeSidePanels
        );

      }
    );


  /* ESCAPE */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {

        closeSidePanels();


        searchPanel
          ?.classList
          .remove(
            "open"
          );

      }

    }
  );

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

async function initializeWebsite() {

  console.log(
    "Starting Healthcare Pharmaceuticals..."
  );


  /*
     Buttons first so one unrelated component
     cannot disable navigation.
  */

  try {

    initializeEvents();


    console.log(
      "Navigation buttons connected."
    );

  } catch (
    error
  ) {

    console.error(
      "Event initialization error:",
      error
    );

  }


  /* GALLERY */

  try {

    initializeGallery();


    console.log(
      "Gallery initialized."
    );

  } catch (
    error
  ) {

    console.error(
      "Gallery initialization error:",
      error
    );

  }


  /* AUTH */

  try {

    initializeAuthListener();

  } catch (
    error
  ) {

    console.error(
      "Auth initialization error:",
      error
    );

  }


  /* PRODUCTS */

  try {

    renderProducts();


    console.log(
      "Products rendered."
    );

  } catch (
    error
  ) {

    console.error(
      "Product rendering error:",
      error
    );

  }


  /* REVIEWS */

  try {

    renderReviews();


    console.log(
      "Moving reviews initialized."
    );

  } catch (
    error
  ) {

    console.error(
      "Review rendering error:",
      error
    );

  }


  /* SESSION */

  try {

    await restoreSession();

  } catch (
    error
  ) {

    console.error(
      "Session restoration error:",
      error
    );

  }


  /* YEAR */

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


  console.log(
    "Healthcare Pharmaceuticals initialized successfully."
  );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeWebsite
);