// Figma node ID mapping
export const FigmaNodes = {
  // Main Pages
  HOME_PAGE: '2:104',      // Home page frame
  CONTACT_PAGE: '2:309',   // Contact page frame
  BLOG_PAGE: '2:548',      // Blog page frame
  DOCS_PAGE: '2:1504',     // Docs page frame
  PORTAL_PAGE: '2:1265',   // Portal page frame
  SIGNUP_PAGE: '2:1026',   // Signup page frame

  // Main Logo
  MAIN_LOGO: '0:1',

  // Navigation & Header (2:115 - 2:292)
  NAV_PRIMARY: '2:115',   // This was incorrectly mapped as HOME
  NAV_SECONDARY: '2:185',
  HEADER_SECTION: '2:199',
  HEADER_DIVIDER: '2:205',
  HEADER_CONTENT: '2:213',
  HEADER_SPACER: '2:219',
  HEADER_NAV: '2:227',
  HEADER_NAV_DIVIDER: '2:233',
  HEADER_BUTTON: '2:273',
  HEADER_ICON: '2:292',

  // Hero Section (2:817 - 2:938)
  HERO_BACKGROUND: '2:817',
  HERO_MAIN: '2:842',
  HERO_CONTENT: '2:938',

  // Feature Section (2:1068 - 2:1285)
  FEATURE_BUTTON: '2:1068',
  FEATURE_SECTION: '2:1097',
  FEATURE_CARD_1: '2:1104',
  FEATURE_IMAGE_1: '2:1126',
  FEATURE_CARD_2: '2:1132',
  FEATURE_IMAGE_2: '2:1140',
  FEATURE_CARD_3: '2:1146',
  FEATURE_ICON_1: '2:1154',
  FEATURE_CARD_4: '2:1160',
  FEATURE_IMAGE_3: '2:1169',
  FEATURE_CARD_5: '2:1175',
  FEATURE_IMAGE_4: '2:1183',
  FEATURE_CARD_6: '2:1189',
  FEATURE_IMAGE_5: '2:1197',
  FEATURE_CARD_7: '2:1203',
  FEATURE_CONTENT: '2:1220',
  FEATURE_GRID_1: '2:1230',
  FEATURE_GRID_2: '2:1240',
  FEATURE_CONTAINER: '2:1260',
  FEATURE_BACKGROUND: '2:1285',

  // UI Elements (2:1290 - 2:1642)
  UI_ICON_1: '2:1290',
  UI_BUTTON_1: '2:1418',
  UI_ELEMENT_1: '2:1450',
  UI_SECTION_1: '2:1466',
  UI_ICON_2: '2:1500',
  UI_CONTAINER_1: '2:1592',
  UI_DIVIDER_1: '2:1599',
  UI_IMAGE_1: '2:1607',
  UI_DIVIDER_2: '2:1614',
  UI_CONTENT_1: '2:1622',
  UI_DIVIDER_3: '2:1629',
  UI_BUTTON_2: '2:1642',

  // Additional UI Components (2:1739 - 2:4354)
  SECTION_CONTAINER: '2:1739',
  SECTION_CONTENT: '2:1749',
  SECTION_GRID: '2:1759',
  SECTION_BACKGROUND: '2:1769',
  
  // Dashboard Elements (2:1800 - 2:2100)
  DASHBOARD_HEADER: '2:1800',
  DASHBOARD_SIDEBAR: '2:1850',
  DASHBOARD_MAIN: '2:1900',
  DASHBOARD_CARD_1: '2:1950',
  DASHBOARD_CARD_2: '2:2000',
  DASHBOARD_CARD_3: '2:2050',
  DASHBOARD_FOOTER: '2:2100',

  // Form Elements (2:2200 - 2:2500)
  FORM_INPUT: '2:2200',
  FORM_BUTTON: '2:2250',
  FORM_CHECKBOX: '2:2300',
  FORM_RADIO: '2:2350',
  FORM_SELECT: '2:2400',
  FORM_TEXTAREA: '2:2450',
  FORM_LABEL: '2:2500',

  // Modal Components (2:2600 - 2:2800)
  MODAL_CONTAINER: '2:2600',
  MODAL_HEADER: '2:2650',
  MODAL_CONTENT: '2:2700',
  MODAL_FOOTER: '2:2750',
  MODAL_CLOSE_BUTTON: '2:2800',

  // Table Elements (2:2900 - 2:3100)
  TABLE_CONTAINER: '2:2900',
  TABLE_HEADER: '2:2950',
  TABLE_ROW: '2:3000',
  TABLE_CELL: '2:3050',
  TABLE_FOOTER: '2:3100',

  // Card Components (2:3200 - 2:3400)
  CARD_CONTAINER: '2:3200',
  CARD_HEADER: '2:3250',
  CARD_CONTENT: '2:3300',
  CARD_FOOTER: '2:3350',
  CARD_IMAGE: '2:3400',

  // Navigation Elements (2:3500 - 2:3700)
  NAV_CONTAINER: '2:3500',
  NAV_ITEM: '2:3550',
  NAV_DROPDOWN: '2:3600',
  NAV_LINK: '2:3650',
  NAV_BUTTON: '2:3700',

  // Alert Components (2:3800 - 2:4000)
  ALERT_SUCCESS: '2:3800',
  ALERT_ERROR: '2:3850',
  ALERT_WARNING: '2:3900',
  ALERT_INFO: '2:3950',
  ALERT_CLOSE: '2:4000',

  // Icon Set (2:4100 - 2:4354)
  ICON_DASHBOARD: '2:4100',
  ICON_SETTINGS: '2:4150',
  ICON_PROFILE: '2:4200',
  ICON_NOTIFICATION: '2:4250',
  ICON_SEARCH: '2:4300',
  ICON_MENU: '2:4354'
};

// Asset Categories for easier management
export const AssetCategories = {
  NAVIGATION: ['NAV_PRIMARY', 'NAV_SECONDARY'],
  HEADER: ['HEADER_SECTION', 'HEADER_CONTENT', 'HEADER_NAV'],
  HERO: ['HERO_BACKGROUND', 'HERO_MAIN', 'HERO_CONTENT'],
  FEATURES: [
    'FEATURE_BUTTON',
    'FEATURE_SECTION',
    'FEATURE_CARD_1',
    'FEATURE_CARD_2',
    'FEATURE_CARD_3',
    'FEATURE_CARD_4',
    'FEATURE_CARD_5',
    'FEATURE_CARD_6',
    'FEATURE_CARD_7'
  ],
  UI_ELEMENTS: [
    'UI_ICON_1',
    'UI_BUTTON_1',
    'UI_ELEMENT_1',
    'UI_SECTION_1',
    'UI_ICON_2'
  ],
  DASHBOARD: [
    'DASHBOARD_HEADER',
    'DASHBOARD_SIDEBAR',
    'DASHBOARD_MAIN',
    'DASHBOARD_CARD_1',
    'DASHBOARD_CARD_2',
    'DASHBOARD_CARD_3',
    'DASHBOARD_FOOTER'
  ],
  FORMS: [
    'FORM_INPUT',
    'FORM_BUTTON',
    'FORM_CHECKBOX',
    'FORM_RADIO',
    'FORM_SELECT',
    'FORM_TEXTAREA',
    'FORM_LABEL'
  ],
  MODALS: [
    'MODAL_CONTAINER',
    'MODAL_HEADER',
    'MODAL_CONTENT',
    'MODAL_FOOTER',
    'MODAL_CLOSE_BUTTON'
  ],
  TABLES: [
    'TABLE_CONTAINER',
    'TABLE_HEADER',
    'TABLE_ROW',
    'TABLE_CELL',
    'TABLE_FOOTER'
  ],
  CARDS: [
    'CARD_CONTAINER',
    'CARD_HEADER',
    'CARD_CONTENT',
    'CARD_FOOTER',
    'CARD_IMAGE'
  ],
  NAVIGATION: [
    'NAV_CONTAINER',
    'NAV_ITEM',
    'NAV_DROPDOWN',
    'NAV_LINK',
    'NAV_BUTTON'
  ],
  ALERTS: [
    'ALERT_SUCCESS',
    'ALERT_ERROR',
    'ALERT_WARNING',
    'ALERT_INFO',
    'ALERT_CLOSE'
  ],
  ICONS: [
    'ICON_DASHBOARD',
    'ICON_SETTINGS',
    'ICON_PROFILE',
    'ICON_NOTIFICATION',
    'ICON_SEARCH',
    'ICON_MENU'
  ]
};

// Helper function to get asset path
export const getFigmaAsset = (nodeId) => {
  return require(`../assets/images/${nodeId}.png`);
};

// Helper function to get asset by semantic name
export const getAsset = (elementKey) => {
  const nodeId = FigmaNodes[elementKey];
  return nodeId ? getFigmaAsset(nodeId) : null;
};

// Helper to get all assets in a category
export const getCategoryAssets = (category) => {
  return AssetCategories[category]?.map(key => ({
    key,
    path: getAsset(key)
  })) || [];
};

// Page organization
export const Pages = {
  MAIN: ['HOME_PAGE', 'CONTACT_PAGE', 'BLOG_PAGE'],
  AUTH: ['SIGNUP_PAGE', 'PORTAL_PAGE'],
  CONTENT: ['DOCS_PAGE']
}; 