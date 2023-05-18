require([
    "esri/config",
    "esri/WebMap",
    "esri/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
], function (esriConfig, WebMap, MapView,ScaleBar, Legend, Home) => {
        esriConfig.apiKey = "AAPK0408bed02615494e8a307f929aa48b26uWtoZdHkqNPFUYFadOfI6i9-fOfnYoXpl790cdaRRix0aCammwzkSVndx9BXMGte"

    const WebMap = new WebMap ( {
        portalItem: {
            id: "22b06b965fa94042a7af2fa95a025316"
        }
    })

    const view = new MapView( {
        container: "viewDiv",
        map: WebMap
    })

    const homeBtn = new Home ( {
        view: view
    })

    view.ui.add(homeBtn, "top-left");
    
    const legend = new legend ({
        view: view
    })

    view.ui.add(Legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view:view
        unit: "metric"
        style: "ruler"


        view.ui.add(scalebar, "bottom-left");

        view.ui.add("basemap-btn", "top-right");
        view.ui.add("layerList-Btn", "top-right");
    
        const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "arcgis-imagery"
        })
    
        const basemapGallery = new BasemapGallery({
            view: view,
            source: {
                query: {
    
                }
            }
        })
    
        view.ui.add(basemapGallery, "top-right");
    
        view.ui.add(basemapToggle, "bottom-right");
    
        const layerList = new LayerList({
            view: view
        })
    
        view.ui.add(layerList, "top-right");
    
        document
            .getElementById("layerList-Btn")
            .addEventListener("click", function () {
                toggleButton("layerList")
            })
    
        document
            .getElementById("basemap-btn")
            .addEventListener("click", function () {
                toggleButton("gallery");
            })
    
        const searchWid = new Search({
            view: view
        })
    
        view.ui.add(searchWid, "bottom-left");
    
        function toggleButton(item) {
            const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
            const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
            let currentProp;
    
            if (item == "layerList") {
                currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
                galleryEl.style.setProperty("display", "none");
            } else if (item == "gallery") {
                currentProp = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
                layerListEl.style.setProperty("display", "none");
    
            }
    
        }
    })
        
    })
    })