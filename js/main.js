(function() {
  /**
   * Credits to: https://www.prefix.ph/prefixes/2019-updated-complete-list-of-philippine-mobile-network-prefixes/
   *
   */

  const prefixes = {
    "0813": "Smart",
    "0928":	"Smart",
    "0966":	"Globe/TM",
    "0817":	"Globe",
    "0929":	"Smart",
    "0967":	"Globe/TM",
    "0904":	"Globe/TM",
    "0930":	"TNT",
    "0970":	"Smart",
    "0905":	"Globe/TM",
    "0931":	"Sun",
    "0973":	"Globe",
    "0906":	"Globe/TM",
    "0932":	"Sun",
    "0975":	"Globe/TM",
    "0907":	"TNT",
    "0933":	"Sun",
    "0976":	"Globe/TM",
    "0908":	"Smart",
    "0934":	"Sun",
    "0977":	"Globe/TM",
    "0909":	"TNT",
    "0935":	"Globe/TM",
    "0978":	"Globe/TM",
    "0910":	"TNT",
    "0936":	"Globe/TM",
    "0979":	"Globe/TM",
    "0911": "Smart",
    "0938": "TNT",
    "0981": "Smart",
    "0912": "TNT",
    "0939": "Smart",
    "0989": "Smart",
    "0913": "Smart",
    "0941": "Sun",
    "0994": "Globe/TM",
    "0914": "Smart",
    "0942": "Sun",
    "0995": "Globe/TM",
    "0915": "Globe/TM",
    "0943":	"Sun",
    "0997": "Globe/TM",
    "0916": "Globe/TM",
    "0944": "Sun",
    "0998": "Smart",
    "0917": "Globe/TM",
    "0945": "Globe/TM",
    "0999": "Smart",
    "0918": "Smart",
    "0946": "TNT",
    "09173": "Globe Postpaid",
    "0919": "Smart",
    "0947": "Smart",
    "09175": "Globe Postpaid",
    "0920": "Smart",
    "0948": "TNT",
    "09176": "Globe Postpaid",
    "0921": "Smart",
    "0949": "Smart",
    "09178": "Globe PostPaid",
    "0922": "Sun",
    "0950": "TNT",
    "09253": "Globe Postpaid",
    "0923": "Sun",
    "0955": "Globe/TM",
    "09255": "Globe Postpaid",
    "0924": "Sun",
    "0956": "Globe/TM",
    "09256": "Globe Postpaid",
    "0925": "Sun",
    "0961": "Smart",
    "09257": "Globe Postpaid",
    "0926": "Globe/TM",
    "0965": "Globe/TM",
    "09258": "Globe Postpaid",
    "0927": "Globe/TM"
  }

  const searchForm = document.querySelectorAll('[data-js-search-form]')[0]
  const searchResultLabel = document.querySelectorAll('[data-js-search-result]')[0]
  const handler = event => {
    const input = searchForm.elements.prefix.value.trim()
    const result = prefixes[input.substring(0, 5)] || prefixes[input.substring(0, 4)]
    if (result) {
      searchResultLabel.textContent = result
    }
    else {
      searchResultLabel.textContent = "Not found! Make sure the number is correct."
    }
    event.preventDefault();
  }
  searchForm.addEventListener("submit", handler, false)
})()
