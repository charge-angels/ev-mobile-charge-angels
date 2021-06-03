export enum ServerAction {
  LOGIN = 'Login',
  LOGOUT = 'Logout',
  PASSWORD_RESET = 'Reset',
  PING = 'Ping',
  CHECK_CONNECTION = 'CheckConnection',

  CHARGING_STATION_CLIENT_INITIALIZATION = 'ChargingStationClientInitialization',
  CHARGING_STATION_RESET = 'ChargingStationReset',
  CHARGING_STATION_REQUEST_OCPP_PARAMETERS = 'ChargingStationRequestOcppParameters',
  CHARGING_STATION_CLEAR_CACHE = 'ChargingStationClearCache',
  CHARGING_STATION_GET_CONFIGURATION = 'ChargingStationGetConfiguration',
  CHARGING_STATION_CHANGE_CONFIGURATION = 'ChargingStationChangeConfiguration',
  CHARGING_STATION_DATA_TRANSFER = 'ChargingStationChangeDataTransfer',
  CHARGING_STATION_REMOTE_START_TRANSACTION = 'ChargingStationRemoteStartTransaction',
  CHARGING_STATION_REMOTE_STOP_TRANSACTION = 'ChargingStationRemoteStopTransaction',
  CHARGING_STATION_UNLOCK_CONNECTOR = 'ChargingStationUnlockConnector',
  CHARGING_STATION_SET_CHARGING_PROFILE = 'ChargingStationSetChargingProfile',
  CHARGING_STATION_GET_COMPOSITE_SCHEDULE = 'ChargingStationGetCompositeSchedule',
  CHARGING_STATION_CLEAR_CHARGING_PROFILE = 'ChargingStationClearChargingProfile',
  CHARGING_STATION_GET_DIAGNOSTICS = 'ChargingStationGetDiagnostics',
  CHARGING_STATION_UPDATE_FIRMWARE = 'ChargingStationUpdateFirmware',
  CHARGING_STATION_CHANGE_AVAILABILITY = 'ChargingStationChangeAvailability',
  CHARGING_STATION_DOWNLOAD_QR_CODE_PDF = 'ChargingStationDownloadQrCodePdf',

  CHARGING_STATIONS_EXPORT = 'ChargingStationsExport',
  CHARGING_STATIONS_OCPP_PARAMS_EXPORT = 'ChargingStationsOCPPParamsExport',
  CHARGING_STATION = 'ChargingStation',
  CHARGING_STATIONS_OCPP_PARAMETERS = 'ChargingStationOcppParameters',
  CHARGING_STATIONS_IN_ERROR = 'ChargingStationsInError',
  CHARGING_STATION_UPDATE_PARAMS = 'ChargingStationUpdateParams',
  CHARGING_STATION_LIMIT_POWER = 'ChargingStationLimitPower',
  CHARGING_STATION_DELETE = 'ChargingStationDelete',

  CHECK_SMART_CHARGING_CONNECTION = 'CheckSmartChargingConnection',
  TRIGGER_SMART_CHARGING = 'TriggerSmartCharging',

  REGISTRATION_TOKEN = 'RegistrationToken',
  REGISTRATION_TOKENS = 'RegistrationTokens',
  REGISTRATION_TOKEN_DELETE = 'RegistrationTokenDelete',
  REGISTRATION_TOKEN_REVOKE = 'RegistrationTokenRevoke',
  REGISTRATION_TOKEN_UPDATE = 'RegistrationTokenUpdate',

  STATUS_NOTIFICATIONS = 'StatusNotifications',

  TRANSACTION_SOFT_STOP = 'TransactionSoftStop',
  TRANSACTION_DELETE = 'TransactionDelete',
  TRANSACTIONS_DELETE = 'TransactionsDelete',
  ASSIGN_TRANSACTIONS_TO_USER = 'AssignTransactionsToUser',
  UPDATE_TRANSACTION = 'UpdateTransaction',

  LOGGINGS = 'Loggings',
  LOGGING = 'Logging',
  LOGGINGS_EXPORT = 'LoggingsExport',

  CHARGING_STATIONS = 'ChargingStations',

  CAR_CATALOGS = 'CarCatalogs',
  CAR_CATALOG = 'CarCatalog',
  CAR_CATALOG_IMAGE = 'CarCatalogImage',
  CAR_CATALOG_IMAGES = 'CarCatalogImages',
  CAR_MAKERS = 'CarMakers',
  CAR_CREATE = 'CarCreate',
  CAR_UPDATE = 'CarUpdate',
  CAR_DELETE = 'CarDelete',
  CARS = 'Cars',
  CAR = 'Car',
  CAR_USERS = 'CarUsers',
  SYNCHRONIZE_CAR_CATALOGS = 'SynchronizeCarCatalogs',

  GET_CONNECTOR_CURRENT_LIMIT = 'GetConnectorCurrentLimit',
  REGISTER_USER = 'RegisterUser',
  CHARGING_PROFILES = 'ChargingProfiles',
  CHARGING_PROFILE_DELETE = 'ChargingProfileDelete',
  CHARGING_PROFILE_UPDATE = 'ChargingProfileUpdate',
  CHARGING_PROFILE_CREATE = 'ChargingProfileCreate',
  GENERATE_QR_CODE_FOR_CONNECTOR = 'GenerateQrCodeForConnector',
  OCPP_PARAM_UPDATE = 'OCPPParamUpdate',
  RESEND_VERIFICATION_MAIL = 'ResendVerificationEmail',
  END_USER_LICENSE_AGREEMENT = 'EndUserLicenseAgreement',
  CHECK_END_USER_LICENSE_AGREEMENT = 'CheckEndUserLicenseAgreement',
  VERIFY_EMAIL = 'VerifyEmail',
  FIRMWARE_DOWNLOAD = 'FirmwareDownload',

  OFFLINE_CHARGING_STATION = 'OfflineChargingStation',

  LOGS_CLEANUP = 'LogsCleanup',
  PERFORMANCES_CLEANUP = 'PerformancesCleanup',
  PERFORMANCES = 'Performances',

  SCHEDULER = 'Scheduler',
  ASYNC_TASK = 'AsyncTask',

  REMOTE_PUSH_NOTIFICATION = 'RemotePushNotification',
  EMAIL_NOTIFICATION = 'EmailNotification',
  END_USER_REPORT_ERROR = 'EndUserReportError',

  SYNCHRONIZE_REFUND = 'RefundSynchronize',

  REGISTRATION_TOKEN_CREATE = 'RegistrationTokenCreate',

  INTEGRATION_CONNECTION_CREATE = 'IntegrationConnectionCreate',
  INTEGRATION_CONNECTIONS = 'IntegrationConnections',
  INTEGRATION_CONNECTION = 'IntegrationConnection',
  INTEGRATION_CONNECTION_DELETE = 'IntegrationConnectionDelete',

  OCPI_SETTINGS = 'OcpiSettings',
  OCPI_CLIENT_INITIALIZATION = 'OcpiClientInitialization',
  OCPI_ENDPOINT_CREATE = 'OcpiEndpointCreate',
  OCPI_ENDPOINT_PING = 'OcpiEndpointPing',
  OCPI_ENDPOINT_CHECK_CDRS = 'OcpiEndpointCheckCdrs',
  OCPI_ENDPOINT_CHECK_LOCATIONS = 'OcpiEndpointCheckLocations',
  OCPI_ENDPOINT_CHECK_SESSIONS = 'OcpiEndpointCheckSessions',
  OCPI_ENDPOINT_PULL_CDRS = 'OcpiEndpointPullCdrs',
  OCPI_ENDPOINT_PULL_LOCATIONS = 'OcpiEndpointPullLocations',
  OCPI_ENDPOINT_PULL_SESSIONS = 'OcpiEndpointPullSessions',
  OCPI_ENDPOINT_PULL_TOKENS = 'OcpiEndpointPullTokens',
  OCPI_ENDPOINT_SEND_EVSE_STATUSES = 'OcpiEndpointSendEVSEStatuses',
  OCPI_ENDPOINT_SEND_TOKENS = 'OcpiEndpointSendTokens',
  OCPI_ENDPOINT_GENERATE_LOCAL_TOKEN = 'OcpiEndpointGenerateLocalToken',
  OCPI_ENDPOINTS = 'OcpiEndpoints',
  OCPI_ENDPOINT = 'OcpiEndpoint',
  OCPI_REGISTER = 'OcpiRegister',
  OCPI_AUTHORIZE_TOKEN = 'OcpiAuthorizeToken',
  OCPI_COMMAND = 'OcpiCommand',
  OCPI_PUT_TOKEN = 'OcpiPutToken',
  OCPI_PATCH_TOKEN = 'OcpiPatchToken',
  OCPI_PATCH_LOCATION = 'OcpiPatchLocation',
  OCPI_PATCH_STATUS = 'OcpiPatchStatus',
  OCPI_PATCH_SESSION = 'OcpiPatchSession',
  OCPI_PUT_LOCATION = 'OcpiPutLocation',
  OCPI_PUT_SESSION = 'OcpiPutSession',
  OCPI_CHECK_CDRS = 'OcpiCheckCdrs',
  OCPI_CHECK_SESSIONS = 'OcpiCheckSessions',
  OCPI_CHECK_LOCATIONS = 'OcpiCheckLocations',
  OCPI_CHECK_TOKENS = 'OcpiCheckTokens',
  OCPI_PUSH_TOKEN = 'OcpiPushToken',
  OCPI_PUSH_TOKENS = 'OcpiPushTokens',
  OCPI_PUSH_SESSION = 'OcpiPushSession',
  OCPI_PUSH_SESSIONS = 'OcpiPushSessions',
  OCPI_PUSH_EVSE_STATUSES = 'OcpiPushEVSEStatuses',
  OCPI_PUSH_CDRS = 'OcpiPushCdrs',
  OCPI_PULL_CDRS = 'OcpiPullCdrs',
  OCPI_PULL_LOCATIONS = 'OcpiPullLocations',
  OCPI_PULL_SESSIONS = 'OcpiPullSessions',
  OCPI_PULL_TOKENS = 'OcpiPullTokens',
  OCPI_START_SESSION = 'OcpiStartSession',
  OCPI_STOP_SESSION = 'OcpiStopSession',
  OCPI_RESERVE_NOW = 'OcpiReserveNow',
  OCPI_UNLOCK_CONNECTOR = 'OcpiUnlockConnector',
  OCPI_GET_VERSIONS = 'OcpiGetVersions',
  OCPI_GET_LOCATIONS = 'OcpiGetLocations',
  OCPI_GET_TOKEN = 'OcpiGetToken',
  OCPI_GET_TARIFF = 'OcpiGetTariff',
  OCPI_GET_TARIFFS = 'OcpiGetTariffs',
  OCPI_POST_CREDENTIALS = 'OcpiPostCredentials',
  OCPI_DELETE_CREDENTIALS = 'OcpiDeleteCredentials',
  OCPI_ENDPOINT_UPDATE = 'OcpiEndpointUpdate',
  OCPI_ENDPOINT_REGISTER = 'OcpiEndpointRegister',
  OCPI_ENDPOINT_UNREGISTER = 'OcpiEndpointUnregister',
  OCPI_ENDPOINT_DELETE = 'OcpiEndpointDelete',

  OICP_SETTINGS = 'OicpSettings',
  OICP_ENDPOINT_CREATE = 'OicpEndpointCreate',
  OICP_ENDPOINT_PING = 'OicpEndpointPing',
  OICP_ENDPOINT = 'OicpEndpoint',
  OICP_ENDPOINTS = 'OicpEndpoints',
  OICP_ENDPOINT_START = 'OicpEndpointStart',
  OICP_PUSH_EVSE_DATA = 'OicpPushEvseData',
  OICP_PUSH_EVSE_STATUSES = 'OicpPushEvseStatuses',
  OICP_UPDATE_EVSE_STATUS = 'OicpUpdateEvseStatus',
  OICP_AUTHORIZE_START = 'OicpAuthorizeStart',
  OICP_AUTHORIZE_STOP = 'OicpAuthorizeStop',
  OICP_AUTHORIZE_REMOTE_START = 'OicpAuthorizeRemoteStart',
  OICP_AUTHORIZE_REMOTE_STOP = 'OicpAuthorizeRemoteStop',
  OICP_PUSH_CDRS = 'OicpPushCdrs',
  OICP_PUSH_EVSE_PRICING = 'OicpPushEvsePricing',
  OICP_PUSH_PRICING_PRODUCT_DATA = 'OicpPushPricingProductData',
  OICP_SEND_CHARGING_NOTIFICATION_START = 'OicpSendChargingNotificationStart',
  OICP_SEND_CHARGING_NOTIFICATION_PROGRESS = 'OicpSendChargingNotificationProgress',
  OICP_SEND_CHARGING_NOTIFICATION_END = 'OicpSendChargingNotificationEnd',
  OICP_SEND_CHARGING_NOTIFICATION_ERROR = 'OicpSendChargingNotificationError',
  OICP_ENDPOINT_SEND_EVSE_STATUSES = 'OicpEndpointSendEVSEStatuses',
  OICP_ENDPOINT_SEND_EVSES = 'OicpEndpointSendEVSEs',
  OICP_PUSH_SESSIONS = 'OicpPushSessions',
  OICP_CREATE_AXIOS_INSTANCE = 'OicpCreateAxiosInstance',
  OICP_ENDPOINT_UPDATE = 'OicpEndpointUpdate',
  OICP_ENDPOINT_REGISTER = 'OicpEndpointRegister',
  OICP_ENDPOINT_UNREGISTER = 'OicpEndpointUnregister',
  OICP_ENDPOINT_DELETE = 'OicpEndpointDelete',

  OCPP_SERVICE = 'OCPPService',

  AUTHORIZATIONS = 'Authorizations',

  DB_WATCH = 'DBWatch',
  DB_MONITOR = 'DBMonitor',

  EXPRESS_SERVER = 'ExpressServer',
  ODATA_SERVER = 'ODataServer',

  LOCKING = 'Locking',

  STARTUP = 'Startup',

  SOCKET_IO = 'SocketIO',

  // OCPP server commands
  BOOT_NOTIFICATION = 'BootNotification',
  AUTHORIZE = 'Authorize',
  HEARTBEAT = 'Heartbeat',
  DIAGNOSTICS_STATUS_NOTIFICATION = 'DiagnosticsStatusNotification',
  FIRMWARE_STATUS_NOTIFICATION = 'FirmwareStatusNotification',
  STATUS_NOTIFICATION = 'StatusNotification',
  START_TRANSACTION = 'StartTransaction',
  STOP_TRANSACTION = 'StopTransaction',
  METER_VALUES = 'MeterValues',
  DATA_TRANSFER = 'DataTransfer',

  EXTRA_INACTIVITY = 'ExtraInactivity',

  CONSUMPTION = 'Consumption',
  REBUILD_TRANSACTION_CONSUMPTIONS = 'RebuildTransactionConsumptions',

  WS_CLIENT_ERROR = 'WSClientError',
  WS_CLIENT_INFO = 'WSClientInfo',

  WS_CONNECTION = 'WSConnection',
  WS_CONNECTION_OPENED = 'WSConnectionOpened',
  WS_CONNECTION_CLOSED = 'WSConnectionClosed',

  WS_JSON_CONNECTION_OPENED = 'WSJsonConnectionOpened',
  WS_JSON_CONNECTION_CLOSED = 'WSJsonConnectionClosed',
  WS_JSON_CONNECTION_ERROR = 'WSJsonConnectionError',

  WS_REST_CONNECTION_OPENED = 'WSRestServerConnectionOpened',
  WS_REST_CONNECTION_CLOSED = 'WSRestServerConnectionClosed',
  WS_REST_CONNECTION_ERROR = 'WSRestServerConnectionError',

  WS_REST_CLIENT_ERROR_RESPONSE = 'WSRestClientErrorResponse',
  WS_REST_CLIENT_MESSAGE = 'WSRestClientMessage',
  WS_REST_CLIENT_SEND_MESSAGE = 'WSRestClientSendMessage',
  WS_REST_CLIENT_CONNECTION_CLOSED = 'WSRestClientConnectionClosed',
  WS_REST_CLIENT_CONNECTION_OPENED = 'WSRestClientConnectionOpened',
  WS_REST_CLIENT_CONNECTION_ERROR = 'WSRestClientConnectionError',

  NOTIFICATION = 'Notification',
  CHARGING_STATION_STATUS_ERROR = 'ChargingStationStatusError',
  CHARGING_STATION_REGISTERED = 'ChargingStationRegistered',
  END_OF_CHARGE = 'EndOfCharge',
  OPTIMAL_CHARGE_REACHED = 'OptimalChargeReached',
  END_OF_SESSION = 'EndOfSession',
  REQUEST_PASSWORD = 'RequestPassword',
  USER_ACCOUNT_STATUS_CHANGED = 'UserAccountStatusChanged',
  NEW_REGISTERED_USER = 'NewRegisteredUser',
  UNKNOWN_USER_BADGED = 'UnknownUserBadged',
  TRANSACTION_STARTED = 'TransactionStarted',
  VERIFICATION_EMAIL = 'VerificationEmail',
  EMAIL_SERVER_ERROR = 'EmailServerError',
  PATCH_EVSE_STATUS_ERROR = 'PatchEVSEStatusError',
  PATCH_EVSE_ERROR = 'PatchEVSEError',
  USER_ACCOUNT_INACTIVITY = 'UserAccountInactivity',
  PREPARING_SESSION_NOT_STARTED = 'PreparingSessionNotStarted',
  OFFLINE_CHARGING_STATIONS = 'OfflineChargingStations',
  BILLING_USER_SYNCHRONIZATION_FAILED = 'BillingUserSynchronizationFailed',
  BILLING_INVOICE_SYNCHRONIZATION_FAILED = 'BillingInvoiceSynchronizationFailed',
  USER_ACCOUNT_VERIFICATION = 'UserAccountVerification',
  ADMIN_ACCOUNT_VERIFICATION = 'AdminAccountVerificationNotification',

  CAR_CATALOG_SYNCHRONIZATION_FAILED = 'CarCatalogSynchronizationFailed',
  CAR_CATALOG_SYNCHRONIZATION = 'CarCatalogSynchronization',
  SESSION_NOT_STARTED_AFTER_AUTHORIZE = 'SessionNotStartedAfterAuthorize',

  UPDATE_CHARGING_STATION_WITH_TEMPLATE = 'UpdateChargingStationWithTemplate',
  UPDATE_CHARGING_STATION_TEMPLATES = 'UpdateChargingStationTemplates',

  MIGRATION = 'Migration',

  SESSION_HASH_SERVICE = 'SessionHashService',

  CLEANUP_TRANSACTION = 'CleanupTransaction',
  TRANSACTIONS_COMPLETED = 'TransactionsCompleted',
  TRANSACTIONS_TO_REFUND = 'TransactionsToRefund',
  TRANSACTIONS_TO_REFUND_EXPORT = 'TransactionsToRefundExport',
  TRANSACTIONS_TO_REFUND_REPORTS = 'TransactionsRefundReports',
  TRANSACTIONS_EXPORT = 'TransactionsExport',
  TRANSACTIONS_ACTIVE = 'TransactionsActive',
  TRANSACTIONS_IN_ERROR = 'TransactionsInError',
  TRANSACTION_YEARS = 'TransactionYears',
  UNASSIGNED_TRANSACTIONS_COUNT = 'UnassignedTransactionsCount',
  TRANSACTION = 'Transaction',
  TRANSACTIONS = 'Transactions',
  TRANSACTION_CONSUMPTION = 'TransactionConsumption',

  TRANSACTION_OCPI_CDR_EXPORT = 'TransactionOcpiCdrExport',

  CHARGING_STATION_CONSUMPTION_STATISTICS = 'ChargingStationConsumptionStatistics',
  CHARGING_STATION_USAGE_STATISTICS = 'ChargingStationUsageStatistics',
  CHARGING_STATION_INACTIVITY_STATISTICS = 'ChargingStationInactivityStatistics',
  CHARGING_STATION_TRANSACTIONS_STATISTICS = 'ChargingStationTransactionsStatistics',
  CHARGING_STATION_PRICING_STATISTICS = 'ChargingStationPricingStatistics',
  STATISTICS_EXPORT = 'StatisticsExport',
  USER_CONSUMPTION_STATISTICS = 'UserConsumptionStatistics',
  USER_USAGE_STATISTICS = 'UserUsageStatistics',
  USER_INACTIVITY_STATISTICS = 'UserInactivityStatistics',
  USER_TRANSACTIONS_STATISTICS = 'UserTransactionsStatistics',
  USER_PRICING_STATISTICS = 'UserPricingStatistics',

  CHARGING_STATION_TRANSACTIONS = 'ChargingStationTransactions',

  ADD_CHARGING_STATIONS_TO_SITE_AREA = 'AddChargingStationsToSiteArea',
  REMOVE_CHARGING_STATIONS_FROM_SITE_AREA = 'RemoveChargingStationsFromSiteArea',

  ADD_ASSET_TO_SITE_AREA = 'AddAssetsToSiteArea',
  REMOVE_ASSET_TO_SITE_AREA = 'RemoveAssetsFromSiteArea',
  ASSET_CREATE = 'AssetCreate',
  ASSETS = 'Assets',
  ASSET = 'Asset',
  ASSET_IMAGE = 'AssetImage',
  ASSETS_IN_ERROR = 'AssetsInError',
  ASSET_UPDATE = 'AssetUpdate',
  ASSET_DELETE = 'AssetDelete',
  CHECK_ASSET_CONNECTION = 'CheckAssetConnection',
  RETRIEVE_ASSET_CONSUMPTION = 'RetrieveAssetConsumption',
  ASSET_CONSUMPTION = 'AssetConsumption',

  TENANT_CREATE = 'TenantCreate',
  TENANTS = 'Tenants',
  TENANT = 'Tenant',
  TENANT_UPDATE = 'TenantUpdate',
  TENANT_DELETE = 'TenantDelete',
  TENANT_LOGO = 'TenantLogo',

  COMPANY_CREATE = 'CompanyCreate',
  COMPANIES = 'Companies',
  COMPANY = 'Company',
  COMPANY_LOGO = 'CompanyLogo',
  COMPANY_UPDATE = 'CompanyUpdate',
  COMPANY_DELETE = 'CompanyDelete',

  SITE_CREATE = 'SiteCreate',
  ADD_SITES_TO_USER = 'AddSitesToUser',
  REMOVE_SITES_FROM_USER = 'RemoveSitesFromUser',
  SITES = 'Sites',
  SITE = 'Site',
  SITE_IMAGE = 'SiteImage',
  SITE_USERS = 'SiteUsers',
  SITE_UPDATE = 'SiteUpdate',
  SITE_USER_ADMIN = 'SiteUserAdmin',
  SITE_OWNER = 'SiteOwner',
  SITE_DELETE = 'SiteDelete',

  SITE_AREA_CREATE = 'SiteAreaCreate',
  SITE_AREAS = 'SiteAreas',
  SITE_AREA = 'SiteArea',
  SITE_AREA_IMAGE = 'SiteAreaImage',
  SITE_AREA_CONSUMPTION = 'SiteAreaConsumption',
  SITE_AREA_UPDATE = 'SiteAreaUpdate',
  SITE_AREA_DELETE = 'SiteAreaDelete',

  TRANSACTIONS_REFUND = 'TransactionsRefund',
  TRANSACTION_PUSH_CDR = 'TransactionPushCdr',
  SYNCHRONIZE_REFUNDED_TRANSACTIONS = 'SynchronizeRefundedTransactions',

  SETTING_CREATE = 'SettingCreate',
  SETTING_BY_IDENTIFIER = 'SettingByIdentifier',
  SETTINGS = 'Settings',
  SETTING = 'Setting',
  SETTING_UPDATE = 'SettingUpdate',
  SETTING_DELETE = 'SettingDelete',

  ADD_USERS_TO_SITE = 'AddUsersToSite',
  REMOVE_USERS_FROM_SITE = 'RemoveUsersFromSite',

  REFUND = 'Refund',

  USER_READ = 'UserRead',
  USER_CREATE = 'UserCreate',
  USER_DELETE = 'UserDelete',
  USER_UPDATE = 'UserUpdate',
  USER_UPDATE_MOBILE_TOKEN = 'UpdateUserMobileToken',
  USERS = 'Users',
  USER_SITES = 'UserSites',
  USERS_IN_ERROR = 'UsersInError',
  USER_IMAGE = 'UserImage',
  TAGS = 'Tags',
  TAG = 'Tag',
  USER_DEFAULT_TAG_CAR = 'UserDefaultTagCar',
  TAG_CREATE = 'TagCreate',
  TAG_UPDATE = 'TagUpdate',
  TAG_DELETE = 'TagDelete',
  TAGS_DELETE = 'TagsDelete',
  TAGS_IMPORT = 'TagsImport',
  USER = 'User',
  USERS_EXPORT = 'UsersExport',
  USERS_IMPORT = 'UsersImport',

  NOTIFICATIONS = 'Notifications',

  BILLING = 'Billing',
  BILLING_TAX = 'BillingTax',
  BILLING_TRANSACTION = 'BillingTransaction',
  BILLING_SEND_INVOICE = 'BillingSendInvoice',
  BILLING_CREATE_INVOICE = 'BillingCreateInvoice',
  BILLING_CREATE_INVOICE_ITEM = 'BillingCreateInvoiceItem',
  BILLING_SYNCHRONIZE_USERS = 'BillingSynchronizeUsers',
  BILLING_SYNCHRONIZE_USER = 'BillingSynchronizeUser',
  BILLING_FORCE_SYNCHRONIZE_USER = 'BillingForceSynchronizeUser',
  CHECK_BILLING_CONNECTION = 'CheckBillingConnection',
  BILLING_TAXES = 'BillingTaxes',
  BILLING_INVOICES = 'BillingUserInvoices',
  BILLING_USER_INVOICE = 'BillingUserInvoice',
  BILLING_SYNCHRONIZE_INVOICES = 'BillingSynchronizeInvoices',
  BILLING_FORCE_SYNCHRONIZE_USER_INVOICES = 'BillingForceSynchronizeUserInvoices',
  BILLING_DOWNLOAD_INVOICE = 'BillingDownloadInvoice',
  BILLING_CREATE_TRANSACTION_INVOICE = 'BillingCreateTransactionInvoice',
  BILLING_NEW_INVOICE = 'BillingNewInvoice',
  BILLING_SETUP_PAYMENT_METHOD = 'BillingSetupPaymentMethod',
  BILLING_PAYMENT_METHODS = 'BillingPaymentMethods',
  BILLING_DELETE_PAYMENT_METHOD = 'BillingDeletePaymentMethod',
  BILLING_CHARGE_INVOICE = 'BillingChargeInvoice',
  BILLING_WEB_HOOK = 'BillingWebHook',

  MONGO_DB = 'MongoDB',

  CHECK_AND_APPLY_SMART_CHARGING = 'CheckAndApplySmartCharging',
  COMPUTE_AND_APPLY_CHARGING_PROFILES_FAILED = 'ComputeAndApplyChargingProfilesFailed',
  SMART_CHARGING = 'SmartCharging',

  INSTANTIATE_DUMMY_MODULE = 'InstantiateDummyModule',

  HTTP_REQUEST = 'HttpRequest',
  HTTP_RESPONSE = 'HttpResponse',
  HTTP_ERROR = 'HttpError'
}

// RESTful API
export enum ServerRoute {
  REST_SIGNIN = 'signin',
  REST_SIGNON = 'signon',
  REST_SIGNOUT = 'signout',
  REST_PASSWORD_RESET = 'password/reset',
  REST_END_USER_LICENSE_AGREEMENT = 'eula',
  REST_END_USER_LICENSE_AGREEMENT_CHECK = 'eula/check',
  REST_MAIL_CHECK = 'mail/check',
  REST_MAIL_RESEND = 'mail/resend',

  REST_CHARGING_STATIONS = 'charging-stations',
  REST_CHARGING_STATION = 'charging-stations/:id',

  REST_CHARGING_STATIONS_RESET = 'charging-stations/:id/reset',
  REST_CHARGING_STATIONS_CACHE_CLEAR = 'charging-stations/:id/cache/clear',
  REST_CHARGING_STATIONS_RETRIEVE_CONFIGURATION = 'charging-stations/:id/configuration/retrieve',
  REST_CHARGING_STATIONS_CHANGE_CONFIGURATION = 'charging-stations/:id/configuration',
  REST_CHARGING_STATIONS_REMOTE_START = 'charging-stations/:id/remote/start',
  REST_CHARGING_STATIONS_REMOTE_STOP = 'charging-stations/:id/remote/stop',
  REST_CHARGING_STATIONS_UNLOCK_CONNECTOR = 'charging-stations/:id/connectors/:connectorId/unlock',
  REST_CHARGING_STATIONS_GET_COMPOSITE_SCHEDULE = 'charging-stations/:id/compositeschedule',
  REST_CHARGING_STATIONS_GET_DIAGNOSTICS = 'charging-stations/:id/diagnostics',
  REST_CHARGING_STATIONS_FIRMWARE_UPDATE = 'charging-stations/:id/firmware/update',
  REST_CHARGING_STATIONS_CHANGE_AVAILABILITY = 'charging-stations/:id/availability/change',

  REST_CHARGING_STATIONS_DOWNLOAD_FIRMWARE = 'charging-stations/firmware/download',
  REST_CHARGING_STATIONS_QRCODE_GENERATE = 'charging-stations/:id/connectors/:connectorId/qrcode/generate',
  REST_CHARGING_STATIONS_QRCODE_DOWNLOAD = 'charging-stations/qrcode/download',

  REST_CHARGING_STATION_GET_OCPP_PARAMETERS = 'charging-stations/:id/ocpp/parameters',
  REST_CHARGING_STATIONS_REQUEST_OCPP_PARAMETERS = 'charging-stations/ocpp/parameters',
  REST_CHARGING_STATIONS_EXPORT_OCPP_PARAMETERS = 'charging-stations/ocpp/parameters/export',

  REST_CHARGING_STATIONS_UPDATE_PARAMETERS = 'charging-stations/:id/parameters',
  REST_CHARGING_STATIONS_POWER_LIMIT = 'charging-stations/:id/power/limit',
  REST_CHARGING_STATIONS_TRANSACTIONS = 'charging-stations/:id/transactions',
  REST_CHARGING_STATIONS_IN_ERROR = 'charging-stations/status/in-error',
  REST_CHARGING_STATIONS_EXPORT = 'charging-stations/action/export',

  REST_CHARGING_STATION_CHECK_SMART_CHARGING_CONNECTION = 'charging-stations/smartcharging/connection/check',
  REST_CHARGING_STATION_TRIGGER_SMART_CHARGING = 'charging-stations/smartcharging/trigger',

  REST_CHARGING_PROFILES = 'charging-profiles',
  REST_CHARGING_PROFILE = 'charging-profiles/:id',

  REST_TRANSACTIONS = 'transactions',
  REST_TRANSACTION = 'transactions/:id',
  REST_TRANSACTIONS_CONSUMPTION = 'transactions/:id/consumptions',

  REST_USERS = 'users',
  REST_USER = 'users/:id',

  REST_TAGS = 'tags',
  REST_TAG = 'tags/:id',

  REST_PING = 'ping',

  REST_TENANTS = 'tenants',

  REST_BILLING_SETTING = 'billing-setting',

  // BILLING URLs for CRUD operations on PAYMENT METHODS
  REST_BILLING_PAYMENT_METHODS = 'users/:userID/payment-methods',
  REST_BILLING_PAYMENT_METHOD = 'users/:userID/payment-methods/:paymentMethodID',

  // BILLING URLs for Non-CRUD Operations on PAYMENT METHODS
  REST_BILLING_PAYMENT_METHOD_SETUP = 'users/:userID/payment-methods/setup',
  REST_BILLING_PAYMENT_METHOD_ATTACH = 'users/:userID/payment-methods/:paymentMethodID/attach',
  REST_BILLING_PAYMENT_METHOD_DETACH = 'users/:userID/payment-methods/:paymentMethodID',

  // BILLING URLs for CRUD operations on INVOICES
  REST_BILLING_INVOICES = 'invoices'
}
