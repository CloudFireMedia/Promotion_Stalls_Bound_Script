var SCRIPT_NAME = "Promotion Stalls Bound Script"
var SCRIPT_VERSION = "v1.4"

var PROPERTIES = PropertiesService.getDocumentProperties()
var LOCK = LockService.getDocumentLock()

function onOpen()                    {PromotionStalls.onOpen()}
function saturday()                  {PromotionStalls.saturday                  (null, null, PROPERTIES, LOCK)}
function sunday()                    {PromotionStalls.sunday                    (null, null, PROPERTIES, LOCK)}
function startNotificationTriggers() {PromotionStalls.startNotificationTriggers (null, null, PROPERTIES, LOCK)}
function stopNotificationTriggers()  {PromotionStalls.stopNotificationTriggers  (null, null, PROPERTIES, LOCK)}
function hideEmptyColumns()          {PromotionStalls.hideEmptyColumns          (null, null, PROPERTIES, LOCK)}
function unHideAllColumns()          {PromotionStalls.unHideAllColumns          (null, null, PROPERTIES, LOCK)}
function deleteExpiredRows()         {PromotionStalls.deleteExpiredRows         (null, null, PROPERTIES, LOCK)}
function addNewRow()                 {PromotionStalls.addNewRow                 (null, null, PROPERTIES, LOCK)}