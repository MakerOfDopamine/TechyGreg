const tabs = [
    "areaMain",
    "areaGather"
]

function switchTab(x) {
    for (let i in tabs) {
        ge(tabs[i]).style.display = "none"
    }
    ge(tabs[x]).style.display = "inline-block"
}