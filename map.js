require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView", // MapView e във view library
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList", //обектът не е добавен, а се използва по-надолу в кода;
    "esri/widgets/BasemapToggle", //обектът не е добавен, а се използва по-надолу в кода;
    "esri/widgets/BasemapGallery", //обектът не е добавен, а се използва по-надолу в кода;
    "esri/widgets/Search", //обектът не е добавен, а се използва по-надолу в кода;
], function (esriConfig, WebMap, MapView,ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) { //ако се използва думата function в синтаксиса не се добавя =>. Знакът => е само при arrow functions;
        esriConfig.apiKey = "AAPK0408bed02615494e8a307f929aa48b26uWtoZdHkqNPFUYFadOfI6i9-fOfnYoXpl790cdaRRix0aCammwzkSVndx9BXMGte"

    const webMap = new WebMap ({ //името на променливата започва винаги с малка буква
        portalItem: {
            id: "22b06b965fa94042a7af2fa95a025316" 
        }
    })

    const view = new MapView( {
        container: "viewDiv",
        map: webMap
    })

    const homeBtn = new Home ( {
        view: view
    })

    view.ui.add(homeBtn, "top-left");
    
    const legend = new Legend ({ // new Legend означава, че се инстанцира обекта Legend, който задължително е с главна буква.
        view: view
    })

    view.ui.add(legend, "bottom-left"); // в изгледа се добавя името на променливата, което винаги започва с малка буква.

    const scaleBar = new ScaleBar({
        view:view, //забравени запетайки. Пропъртита на обекти се изброяват със запетая.
        unit: "metric",
        style: "ruler",
    }) // забравени затварящи скоби


        view.ui.add(scaleBar, "bottom-left"); // сгрешено име на променлива  scaleBar;

        view.ui.add("basemap-btn", "top-right"); // не е добавен бутон с това id в html файла;
        view.ui.add("layerList-btn", "top-right"); // не е добавен бутон с това id в html файла;
    
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
    
        const layerList = new LayerList({ // не е импортнат обект LayerList. Трябва да се добави най - отгоре във файла, за да бъде използван.
            view: view
        })
    
        view.ui.add(layerList, "top-right");
    
        document
            .getElementById("layerList-btn")
            .addEventListener("click", function () {
                toggleButton("layerList");
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