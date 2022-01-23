TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "id": "panorama_95AACD35_879B_5DCB_41C8_34722F0327D3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95AADD35_879B_5DCB_41C6_BDF17CF768B4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.58,
        "yaw": 27.53,
        "image": {
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 67,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39, this.camera_95140601_8795_4FCA_41DB_410EE814142A); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 27.53,
        "hfov": 7.58,
        "image": {
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 135,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95A90D35_879B_5DCB_41D4_DCB4E8D04B4F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.07,
        "yaw": -4.84,
        "image": {
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 63,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_8AA2F321_876B_45CB_41C1_82D9D55B4C3B, null, null, null, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -4.84,
        "hfov": 7.07,
        "image": {
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8.86
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95A93D35_879B_5DCB_41CE_67689E61B8CA",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.86,
        "yaw": 18.4,
        "image": {
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_8A9B3330_876B_45CA_41CC_0E801B56F043, null, null, null, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 18.4,
        "hfov": 4.86,
        "image": {
         "levels": [
          {
           "height": 85,
           "class": "ImageResourceLevel",
           "width": 87,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.72
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95A97D35_879B_5DCB_41A5_E14124815EBC",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.35,
        "yaw": 62.87,
        "image": {
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.35
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_8965C078_8775_4439_41B0_77DA52CF0608, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_8A9BD330_876B_45CA_41B0_150D485F1B46, null, null, null, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 62.87,
        "hfov": 7.35,
        "image": {
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 132,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.35
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95A9AD35_879B_5DCB_41D1_4E7B152541D6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.85,
        "yaw": 34.23,
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 52,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_8823FA66_8775_4456_41D5_61331A1F6C3B, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','paddingLeft':5,'pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_8A9A0330_876B_45CA_41DF_BB50069C3AD2, null, null, null, null, false)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 34.23,
        "hfov": 5.85,
        "image": {
         "levels": [
          {
           "height": 112,
           "class": "ImageResourceLevel",
           "width": 105,
           "url": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 7.47
       }
      ]
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 7.07,
      "yaw": -4.84,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "id": "popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7_0_2.jpg"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "cubic_in",
      "pitch": 8.86
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 4.86,
      "yaw": 18.4,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "id": "popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16_0_2.jpg"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "cubic_in",
      "pitch": 6.72
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 7.35,
      "yaw": 62.87,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "id": "popup_8965C078_8775_4439_41B0_77DA52CF0608",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8965C078_8775_4439_41B0_77DA52CF0608_0_2.jpg"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "cubic_in",
      "pitch": 7.35
     },
     {
      "rotationX": 0,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 5.85,
      "yaw": 34.23,
      "hideEasing": "cubic_out",
      "rotationZ": 0,
      "id": "popup_8823FA66_8775_4456_41D5_61331A1F6C3B",
      "hideDuration": 500,
      "showDuration": 500,
      "image": {
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8823FA66_8775_4456_41D5_61331A1F6C3B_0_2.jpg"
        }
       ],
       "class": "ImageResource"
      },
      "showEasing": "cubic_in",
      "pitch": 7.47
     }
    ]
   }
  ],
  "pitch": 0,
  "hfovMax": 130,
  "label": "PXL_20220123_165534776.PHOTOSPHERE",
  "partial": false,
  "hfovMin": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "vfov": 169.61,
     "id": "panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3032,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_hq.jpeg"
         },
         {
          "height": 1885,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8959D9BE_877B_C439_41B2_ABDF51B8BD3A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.03,
           "yaw": -166.41,
           "image": {
            "levels": [
             {
              "height": 51,
              "class": "ImageResourceLevel",
              "width": 54,
              "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.03
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3, this.camera_9507C5D2_8795_4C4E_41D9_F54C07AB9806); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -166.41,
           "hfov": 6.03,
           "image": {
            "levels": [
             {
              "height": 103,
              "class": "ImageResourceLevel",
              "width": 108,
              "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.03
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_8AC2191B_877A_C5FF_41DE_6D73B6DA1091",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.03,
           "yaw": 12.96,
           "image": {
            "levels": [
             {
              "height": 47,
              "class": "ImageResourceLevel",
              "width": 45,
              "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_0_HS_1_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.28
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81, this.camera_951945F2_8795_4C49_41DE_07C19F32C097); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 12.96,
           "hfov": 5.03,
           "image": {
            "levels": [
             {
              "height": 94,
              "class": "ImageResourceLevel",
              "width": 90,
              "url": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.28
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "label": "PXL_20220123_165258209.PHOTOSPHERE",
     "partial": false,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3",
       "yaw": -166.41,
       "backwardYaw": 27.53,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "vfov": 173.28,
        "id": "panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3097,
             "class": "ImageResourceLevel",
             "width": 6434,
             "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_hq.jpeg"
            },
            {
             "height": 1926,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_8A99C6A5_877D_4CCA_41A2_D7F3B5AF9BB8",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.32,
              "yaw": -157.25,
              "image": {
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 65,
                 "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.76
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39, this.camera_95485640_8795_4C49_41A9_FF9654EA3971); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -157.25,
              "hfov": 7.32,
              "image": {
               "levels": [
                {
                 "height": 116,
                 "class": "ImageResourceLevel",
                 "width": 130,
                 "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.76
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_8A1A9761_877E_CC4B_41DC_C3704EF3EE8D",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 7.08,
              "yaw": 58.11,
              "image": {
               "levels": [
                {
                 "height": 53,
                 "class": "ImageResourceLevel",
                 "width": 63,
                 "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_0_HS_1_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.75
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "rollOverDisplay": false,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 58.11,
              "hfov": 7.08,
              "image": {
               "levels": [
                {
                 "height": 107,
                 "class": "ImageResourceLevel",
                 "width": 126,
                 "url": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.75
             }
            ]
           }
          ]
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "label": "PXL_20220123_164836660.PHOTOSPHERE",
        "partial": false,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39",
          "yaw": -157.25,
          "backwardYaw": 12.96,
          "distance": 1
         }
        ],
        "hfov": 360,
        "thumbnailUrl": "media/panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_t.jpg"
       },
       "yaw": 12.96,
       "backwardYaw": -157.25,
       "distance": 1
      }
     ],
     "hfov": 360,
     "thumbnailUrl": "media/panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_t.jpg"
    },
    "yaw": 27.53,
    "backwardYaw": -166.41,
    "distance": 1
   }
  ],
  "hfov": 360,
  "thumbnailUrl": "media/panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 29.68,
   "pitch": -2.88
  }
 },
 "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39",
 {
  "class": "PanoramaCamera",
  "id": "panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.23,
   "pitch": -5.44
  }
 },
 "this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81",
 {
  "class": "PanoramaCamera",
  "id": "panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.12,
   "pitch": -1.1
  }
 },
 {
  "class": "Panorama",
  "vfov": 173.98,
  "id": "panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3110,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_hq.jpeg"
      },
      {
       "height": 1934,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_89738A63_877F_444F_41D9_020F2AEFD524",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.25,
        "yaw": -114.54,
        "image": {
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.97
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246, this.camera_8A81E38E_876B_44D9_41B0_1D747282AAE6); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -114.54,
        "hfov": 5.25,
        "image": {
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.97
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8827FEE6_8795_5C49_41D8_CA967BA42025",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.78,
        "yaw": -63.29,
        "image": {
         "levels": [
          {
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 52,
           "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.22
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246, this.camera_95219621_8795_4FCB_41C5_395B4238BFCE); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -63.29,
        "hfov": 5.78,
        "image": {
         "levels": [
          {
           "height": 71,
           "class": "ImageResourceLevel",
           "width": 104,
           "url": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.22
       }
      ]
     }
    ]
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "PXL_20220123_164518980.PHOTOSPHERE",
  "partial": false,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "vfov": 175.16,
     "id": "panorama_8DD3E0D9_876D_447B_419A_7F0729311246",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3131,
          "class": "ImageResourceLevel",
          "width": 6434,
          "url": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246_hq.jpeg"
         },
         {
          "height": 1947,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_895B42B0_877D_44C9_41C6_7A05A7993AFD",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 5.99,
           "yaw": 97.12,
           "image": {
            "levels": [
             {
              "height": 47,
              "class": "ImageResourceLevel",
              "width": 54,
              "url": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.76
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9, this.camera_953CB630_8795_4FC9_41DD_3D9F58D7FD15); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 97.12,
           "hfov": 5.99,
           "image": {
            "levels": [
             {
              "height": 94,
              "class": "ImageResourceLevel",
              "width": 108,
              "url": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.76
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "label": "PXL_20220123_164233556.PHOTOSPHERE",
     "partial": false,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9",
       "yaw": 97.12,
       "backwardYaw": -63.29,
       "distance": 1
      }
     ],
     "hfov": 360,
     "thumbnailUrl": "media/panorama_8DD3E0D9_876D_447B_419A_7F0729311246_t.jpg"
    },
    "yaw": -63.29,
    "backwardYaw": 97.12,
    "distance": 1
   }
  ],
  "hfov": 360,
  "thumbnailUrl": "media/panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.93,
   "pitch": -3.07
  }
 },
 "this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246",
 {
  "class": "PanoramaCamera",
  "id": "panorama_8DD3E0D9_876D_447B_419A_7F0729311246_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 135.21,
   "pitch": 2.49
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246",
    "camera": "this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_8ABB02F2_876B_4449_41D5_DD1FDF568230",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230, 0, 1)",
    "media": "this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_95AACD35_879B_5DCB_41C8_34722F0327D3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230, 1, 2)",
    "media": "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DA42AAA_876F_44DE_41C0_337F3F9CBE39_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230, 2, 3)",
    "media": "this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8D8E5C78_876E_BC3A_41DA_178E0DD20F81_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230, 3, 4)",
    "media": "this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DD2C212_876D_47C9_41D1_20CB8B2B7AD9_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230, 4, 0)",
    "media": "this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8DD3E0D9_876D_447B_419A_7F0729311246_camera"
   }
  ]
 },
 "this.popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7",
 {
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8A886EC7_877B_5C56_41C7_DF5B4E8B68A7_0_3.jpg"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_8AA2F321_876B_45CB_41C1_82D9D55B4C3B"
 },
 "this.popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16",
 {
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8A92FB5C_8777_C47A_41C4_ECFDCB6FFB16_0_3.jpg"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_8A9B3330_876B_45CA_41CC_0E801B56F043"
 },
 "this.popup_8965C078_8775_4439_41B0_77DA52CF0608",
 {
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8965C078_8775_4439_41B0_77DA52CF0608_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8965C078_8775_4439_41B0_77DA52CF0608_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8965C078_8775_4439_41B0_77DA52CF0608_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8965C078_8775_4439_41B0_77DA52CF0608_0_3.jpg"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_8A9BD330_876B_45CA_41B0_150D485F1B46"
 },
 "this.popup_8823FA66_8775_4456_41D5_61331A1F6C3B",
 {
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8823FA66_8775_4456_41D5_61331A1F6C3B_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8823FA66_8775_4456_41D5_61331A1F6C3B_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8823FA66_8775_4456_41D5_61331A1F6C3B_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8823FA66_8775_4456_41D5_61331A1F6C3B_0_3.jpg"
   }
  ],
  "class": "ImageResource",
  "id": "ImageResource_8A9A0330_876B_45CA_41DF_BB50069C3AD2"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_9507C5D2_8795_4C4E_41D9_F54C07AB9806",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -152.47,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_951945F2_8795_4C49_41DE_07C19F32C097",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 22.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_95140601_8795_4FCA_41DB_410EE814142A",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_95219621_8795_4FCB_41C5_395B4238BFCE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.88,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_953CB630_8795_4FC9_41DD_3D9F58D7FD15",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 116.71,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_95485640_8795_4C49_41A9_FF9654EA3971",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.04,
   "pitch": 0
  }
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "shadow": false,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "minHeight": 50,
  "class": "ViewerArea",
  "playbackBarBottom": 5,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "progressBarBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadow": true,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressOpacity": 1,
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 0,
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "bottom",
  "children": [
   {
    "verticalAlign": "top",
    "paddingLeft": 20,
    "itemBackgroundColorRatios": [],
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingTop": 3,
    "itemThumbnailShadowBlurRadius": 4,
    "itemVerticalAlign": "middle",
    "itemLabelGap": 5,
    "width": 800,
    "height": 130,
    "itemLabelFontFamily": "Arial",
    "paddingRight": 20,
    "gap": 10,
    "itemPaddingRight": 3,
    "scrollBarVisible": "rollOver",
    "itemBackgroundColorDirection": "vertical",
    "paddingTop": 10,
    "shadow": false,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemLabelFontColor": "#FFFFFF",
    "selectedItemLabelFontWeight": "bold",
    "borderRadius": 5,
    "itemThumbnailShadowOpacity": 0.8,
    "backgroundColorDirection": "vertical",
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemHorizontalAlign": "center",
    "backgroundColorRatios": [
     0
    ],
    "itemMode": "normal",
    "scrollBarOpacity": 0.5,
    "scrollBarMargin": 2,
    "minHeight": 0,
    "scrollBarColor": "#FFFFFF",
    "itemLabelPosition": "bottom",
    "itemOpacity": 1,
    "class": "ThumbnailList",
    "minWidth": 0,
    "itemThumbnailHeight": 75,
    "backgroundOpacity": 0.2,
    "itemThumbnailShadow": true,
    "horizontalAlign": "left",
    "itemLabelTextDecoration": "none",
    "maxHeight": 600,
    "itemBorderRadius": 0,
    "itemThumbnailOpacity": 1,
    "maxWidth": 800,
    "itemBackgroundColor": [],
    "itemLabelFontWeight": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "data": {
     "name": "ThumbnailList460"
    },
    "itemLabelFontSize": 14,
    "itemPaddingLeft": 3,
    "paddingBottom": 10,
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "layout": "horizontal",
    "itemThumbnailBorderRadius": 5,
    "playList": "this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230",
    "borderSize": 0,
    "itemPaddingBottom": 3,
    "itemThumbnailWidth": 100
   }
  ],
  "borderSize": 0,
  "creationPolicy": "delayed",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "paddingLeft": 0,
  "height": 200,
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "shadow": false,
  "gap": 10,
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "scrollBarColor": "#000000",
  "minHeight": 20,
  "class": "Container",
  "minWidth": 20,
  "bottom": 0,
  "data": {
   "name": "Container459"
  },
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "left": 0,
  "layout": "horizontal",
  "right": 0,
  "overflow": "visible"
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "shadow": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 0,
  "top": 0,
  "class": "UIComponent",
  "minWidth": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent16537"
  },
  "backgroundOpacity": 0.55,
  "visible": false,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "class": "ZoomImage",
  "minWidth": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage16538"
  },
  "backgroundOpacity": 1,
  "visible": false,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "paddingRight": 5,
  "iconWidth": 20,
  "paddingLeft": 5,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "iconHeight": 20,
  "textDecoration": "none",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingTop": 5,
  "shadow": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "borderRadius": 0,
  "gap": 5,
  "backgroundColorDirection": "vertical",
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontWeight": "normal",
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "top": 10,
  "cursor": "hand",
  "class": "CloseButton",
  "borderColor": "#000000",
  "minWidth": 0,
  "iconLineWidth": 5,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "visible": false,
  "shadowColor": "#000000",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "layout": "horizontal",
  "label": "",
  "data": {
   "name": "CloseButton16539"
  },
  "right": 10
 }
], 
 "start": "this.syncPlaylists([this.playList_8ABB02F2_876B_4449_41D5_DD1FDF568230,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "delayed",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "shadow": false,
 "gap": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "class": "Player",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player457"
 },
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "contentOpaque": false,
 "overflow": "visible"
})