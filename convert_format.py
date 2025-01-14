import json
import os

ListOfSources = {
        "Count": [
          [
            "How to count over 1-10 in Japanese",
            "https://docs.google.com/presentation/d/e/2PACX-1vQYAa4aUNl8tBpJhSPEe7kXBa6CGqnfkQCigEUow4GPACzHO9c4pcKsW8IyQKEV_-iqHaZjdH2o0HfG/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "How to count over 10",
            "https://docs.google.com/presentation/d/e/2PACX-1vSIkzPhiwEJsNhJGQHkHFJ6VBb8rGDYIhsTGHRJdkYJ5KHci4QPz3GmPCZ0olQ3yCiAUhGEDDf-sELq/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "CharacterOrigami": [
          [
            "まっくろくろすけ",
            "https://docs.google.com/presentation/d/e/2PACX-1vRxyyZKqMxMRdTk_LLY_3JLWpkHQz9h8km5BUD9uklZcRURc489JAVxUNppmepAcdGRSZTCXE-RUHT0/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Small Totoro",
            "https://docs.google.com/presentation/d/e/2PACX-1vSi0cGNhhUaVnay2ksZ4McxuI5Cbmf0jOgpvA0nX0zflooX8Yz2iOEoQrh0HMu8rcqXHVkBNLcsaiVZ/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Big Totoro",
            "https://docs.google.com/presentation/d/e/2PACX-1vR5ti5rNJWkPevrIEdcIYq9tfIrvPD5ZfcX-MA9yEDjyQoAyZroIisYpw9zlmOSAJlBthzmXVJwNP-O/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "3DOrigami": [
          [
            "BiPyramid",
            "https://docs.google.com/presentation/d/e/2PACX-1vTNccMDuJLX1JfWzl4-cgcapT8V-b_ic993XVzcal4nVsQFpleHA-dNKehFNnUYYO6IfAbcPTI7Xpt8/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "EasyOrigami": [
          [
            "ハロウィンおりがみ Easy Holloween origami",
            "https://docs.google.com/presentation/d/e/2PACX-1vTbl10Nk27O9G0bLpKO8AxmUIktlLR_Ox9OoeTrzKLjhcuaP4z9CQg3o_YXMhYccfRAKWdVGIwRRTFS/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "おにぎり Easy Rice Ball",
            "https://docs.google.com/presentation/d/e/2PACX-1vQ4WzMDhp5byZTmaJLgizzSVHMyJOgOAkevsWlQ39WhZcbWRB0q3BUhWemF38blYiz42_KpKM3z3tNw/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Crafting": [
          [
            "Simple Mt. Fuji",
            "https://docs.google.com/presentation/d/e/2PACX-1vR8NyCcEEBLrD-fo1x45b1A9w4I5sfSoQpfc-1F_CHXlm5USnVVUUSnAUPnJo9yk4PdGd86_tW4lLgx/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Simple Rabbit",
            "https://docs.google.com/presentation/d/e/2PACX-1vSxdspLuyF0Bg2NlDMaywjNS1X92HSFbFEa83m8zX_VkJ25527XoIgM84fpzQURME3c8r6x2vauLX09/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "How to draw Otukimi Rabbit つきの うさぎ",
            "https://docs.google.com/presentation/d/e/2PACX-1vQS5FR7mXtpBKhg_73Vv04nI8NYkBXFZfusH-YvitLwVyQpMy7Twty3zmYDnjqm5MvrnVMqUGwvkNrQ/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Teru-Teru",
            "https://docs.google.com/presentation/d/e/2PACX-1vTYAFTUFJnJKglKGoQv01v9gcckyOBzzJCwcYjXLznp_WAdVf2UWaFgsiL9fKUYyE_b3WOYpgGvPI1d/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Ghibli": [
          [
            ' Complete grammar guide, My Neighbor Totoro "Stroll" さんぽ',
            "https://docs.google.com/presentation/d/e/2PACX-1vTYbXfCHQPDtsVD7cTvViIAT-wDJAeoHCe-u8sS2pVtLBT3MAmMYXGQq87_oUc94Z9M0G_KoUldqY9f/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Spirited Away",
            "https://docs.google.com/presentation/d/e/2PACX-1vS9xyHg-5RYEaOLEem8DdxQ0QwvcSEaC7FWZ1kfqOGTajTwHQ4WvErszPrERRWbl-vKp3232JaW6_dd/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Princess Mononoke",
            "https://docs.google.com/presentation/d/e/2PACX-1vR4PBg4c743SygPzKwM-i62qFGgBNpOS0PVzgKFKr2l1JxQdo5P1dubuCe-v0sAlVJsq_ugyBxzzJA2/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Season": [
          [
            "Discover the Seasonal Wonders of Japan: 日本の四季折々の魅力",
            "https://docs.google.com/presentation/d/e/2PACX-1vQ3UOcJwn53awxOPxVXTbUsveoLsB5TXDP0N9wSe6T6CUPo8fu_YbzQlyWFPoe2XVQfVHwQv-ajnN16/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "10 reason why you should visit Japan in every seasons",
            "https://docs.google.com/presentation/d/e/2PACX-1vSidHINafg2uv0-Nastg6u8Gt7n-QDSe0LbuEWuEB5XVQBmUxSSwimvidM0h6gJDg8eXMj_1CxgMSuE/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "なつまつり Summer Festival in Japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vRYNcAtdmlAtChL-y9YMFTJpw0jqpju29HMolpZacw_eiU3j_2x5oK9iKkjWdeeBmUFhBPo6TqWqdJF/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Summer adventure in Japan なつやすみ",
            "https://docs.google.com/presentation/d/e/2PACX-1vRZwdmh_OqxE8cHS9280ocvclYUSIRalVv8_DCX9q0SFHAHt9O93KfPWXLsnMM_9wJkmud-0Lo9Rexq/embed?start=false&loop=false&delayms=3000&",
          ],
          [
            "はなみ (Hanami)",
            "https://docs.google.com/presentation/d/e/2PACX-1vRJYxZnsw_wLSIG3ON0_tc4yQ6Qtv69bSaRV_dtwC5cvxd70wVpi-GBngdGdC_bvlvjjvjgLluvkbu9/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Spring Trip in Kochi Prefecture 高知県",
            "https://docs.google.com/presentation/d/e/2PACX-1vQpe0VJLe3k-aE-wO3BztSt5Y_WE5kzXOjSF9Oanv6iIjb2U0UMqoAZoeCYCWIQlp5Qd4-G6Kt2as_2/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "The Four season in Japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vSNxWh1r1et7hER8EvouUuIO1BS9o5vRBRIdXtuOrFiwrnTQUZsZFTB6o4iPHWZvaLMfc4Y9RhB4bq_/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japanese Rainy Season",
            "https://docs.google.com/presentation/d/e/2PACX-1vTlw1Lu_Hycbae5xDIh1K2IcyXUnkP221_Mtwyge9Ha2EJcGXExYgRDbs0L89OvsShzQNlSQuSnkJdm/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Autumn あき",
            "https://docs.google.com/presentation/d/e/2PACX-1vQaJxlJW7V0RDuLELEQc6iz7CfGS4HAJD3gdWa6qpQXAbNjMxu-D6pNO0U6vIOBOG4t7bCedNOj56Rc/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Winter ふゆ",
            "https://docs.google.com/presentation/d/e/2PACX-1vTp246I2DNdPG4gnQ8HeKjrlwGpjbvz0aIX2GeKwhtmtn8qW2suZJbv2j82UcyJpuf2h-2cu7T2GOso/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Festival": [
          [
            "Tanabata",
            "https://docs.google.com/presentation/d/e/2PACX-1vSSmIBeFaszMhtgwrMf756Nv7ssf5iQlKYUCe1ynmxG2LTb2dRfQgGX4LRSkdboJg/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Setsubun 節分",
            "https://docs.google.com/presentation/d/e/2PACX-1vSHCcKERv5J1hemsEgzfWd_ymq_ZiXhBIhVNmk3ZUikLxBOei-ISwmOF7qu4lIiikMHLddBUtjhw_vm/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "せいじんしき Seijinsiki",
            "https://docs.google.com/presentation/d/e/2PACX-1vQTSOxfiB6M2n8myjGk9FWHpMhJ6eIBuLVyh638lyxNFPTqwnk9nDDNF7tTY_IOqw/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "ねんがじょう How to create the New Year Greeting Cards",
            "https://docs.google.com/presentation/d/e/2PACX-1vRGHY-cKmtO6XbMgU5pTwcmoaPxBEZ_WAnRfrgpTBv8w-YfDxrccDLawgYJefN-VhLcXYUaGfznrW6L/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Jyuugoya (十五夜) Mid-Autumn Moon",
            "https://docs.google.com/presentation/d/e/2PACX-1vQYWcoCAIItcPiJ0-K_q51_plawoXXHw7OVyxsUakum32O32hawYwhI_5lQRdlyxngtCy2nM-iAtU7I/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "What People See in the Moon",
            "https://docs.google.com/presentation/d/e/2PACX-1vSxUmMhtmUQV2mVM64D8J7yaaKbRil9JMLp_hW_iKKrF_oLDmYzY-mNwa7F-qVKy52jPlo0K68ywkRH/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Mother's Day and Father's Day ははのひ ちちのひ",
            "https://docs.google.com/presentation/d/e/2PACX-1vQZqikUpgeZMNO6b8sc5NlTJp81hlXhyGqTvTb7mh8YL3d6IaTBvRRPpVxBN2jIKC08eZamNu6S-ujJ/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Kodomo no Hi : Children Day",
            "https://docs.google.com/presentation/d/e/2PACX-1vTSzgr4rasWR-e98xitF0_MnZeeX5U55cs3OyvaNTRw2niTroTRTL3rs3vb2whzMmJy48WOAdifNi96/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "The Koinobori no Sato Festival",
            "https://docs.google.com/presentation/d/e/2PACX-1vQoHT8azymbY7JXZ5g7qspwufMT0ZEHYrMYOgQNQYUToQX6w6MzeXaXlslAUfeROjNUGmxzYvuEtQ-l/embed?start=false&loop=false&delayms=3000",
          ],
          [
            '"Hinamatsuri" ひなまつり : Japanese Doll Festival',
            "https://docs.google.com/presentation/d/e/2PACX-1vSGgyEg6AzaSpGso8hWqic2F6ij82vqOciPwhvG5xMScDgK03-Sv3azUqrOzQUQMWpWCjuhgirSkbwb/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Yokote Kamakura Festival 2023",
            "https://docs.google.com/presentation/d/e/2PACX-1vRzIpv8pBqcPBlslnAv3NtqZ7zshIGEZjS24U28ygoXIXNEcXu3gAQFKTgDCVKQjMIEwaDRdVcPE6M6/embed?start=false&loop=false&delayms=3000",
          ],
          [
            " Setubun : せつぶん 2023",
            "https://docs.google.com/presentation/d/e/2PACX-1vQJzfIhjufg447sjSrQ8sJoDdipPJdLXnuVXLJuEwIMCJ_85lZjkx-ubelwSrQb2FE6vKfYfH4kYEVC/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "New Year Greeting",
            "https://docs.google.com/presentation/d/e/2PACX-1vRBA94YVEbdLK18fbfWAgq1LNlINatwNwEjcOWOzX28rcTnsaIy_AwVsljgCtURc5a_oKv7Qz2Yn9lU/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "2023 Expression of the Western calendar and  Japanese Era Calendar in Japanese: ことしはなんねんですか",
            "https://docs.google.com/presentation/d/e/2PACX-1vR-ER5rMbTIF5M1YXxCxtZW-zruJafMKonJUkbIEpLz0_RRfPEyeuE2y_k2MbisGvseYYts3uRKNGL9/embed?start=false&loop=false&delayms=3000",
          ],
          [
            " 2023 Dialogue: あなたは なにどしですか。",
            "https://docs.google.com/presentation/d/e/2PACX-1vRlit_vlfJOZDJWZVGiZQoigpY6TcF0-e0mT90wJW-GaNmInzUaP-a_bgmiypOp2pCKB0VCSR2SPm9Y/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "How to write ねんがじょう Japanese New Year Post Card",
            "https://docs.google.com/presentation/d/e/2PACX-1vRnH_shwMzq0y1dGT9bQNFNaCXKQ2SWo2_vDKRxVQaA_joRFOOPzmT3qo0ooMurishcUBuFZLg8-GCY/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "はつもうで Hatsumoude",
            "https://docs.google.com/presentation/d/e/2PACX-1vSP5CmbFl4obdfCTUa_jeLcc9Xii0MFPU5jvQgE4LrZvgjKo5cnAt9xScxZVV6kvWAd8jOxLt_JybFX/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "おつきみ Moon viewing Festival",
            "https://docs.google.com/presentation/d/e/2PACX-1vR1Hlgd8hj9P-GLyLlm43kM0VqoW8JjDkiAa6a36d2k_unLg0fuDnoWLFgEIMvQnZIbY9aCbiEm42Md/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "おぼん Japanese Spirit Festival",
            "https://docs.google.com/presentation/d/e/2PACX-1vRuKktuz2N7JfYcBhSn2G9S4Mm8kcLdAtMmg7Hg_zpt9cMVjKJcxen2zSEYobDpi9LsR0EknVkpcXH6/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Food": [
          [
            "Rice",
            "https://docs.google.com/presentation/d/e/2PACX-1vQRj80OmUEsBrkOqXAmBZ6d22vhUT42qqOkOKvKeeAC2wsbmiz8fGmYeWJJSFmWdUzKXU5-K1ePBCVE/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Onigiri",
            "https://docs.google.com/presentation/d/e/2PACX-1vSs6EKT8eMh3KvJ_XJLvt6qn33UUx-QomUCGJ02r2n8_SqAXRkY-TUC7ZohAYcP7di1ZwUgOnbRQ6-i/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Travel": [
          [
            "温泉について",
            "https://docs.google.com/presentation/d/e/2PACX-1vS1OMmgA3ZsL_T1pMGbMs32yinqwvmeWJpyrDaoqXjvgBVerD81xqL1GO4AAhT96zCuPoVzaqTxK7U2/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "How to count Japanese money. おかねのかぞえかた",
            "https://docs.google.com/presentation/d/e/2PACX-1vQ8O2VAJTrKnc2MJYR3KqukqLqkrN0_CPuMCB5-7tvcEagzNgHoV2y2yXbtmNrgmfiCHqeQCpTCw0ho/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "the Japanese Yen (JPY) おかね Money",
            "https://docs.google.com/presentation/d/e/2PACX-1vRf4D7Y1vd3hYaJ0oY-FHnUx51vQSG96rA0jGVGcV2c0Z_u4WXJHTNb6jc0tBL4cu1AxsTJ6Plc45dP/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Fujisan ふじさん",
            "https://docs.google.com/presentation/d/e/2PACX-1vTpKJvX3b3HbD_WErhIRLM7Tw0QEt_cu2peXAdlL1oLlwcNAlcP5BFvZPK6X0hj3wZ7rn9_LmZTK87x/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japan's Geography",
            "https://docs.google.com/presentation/d/e/2PACX-1vT9cYnzVDuvAcqC61vGit_eJt9b7T2v1MFggNeCUf6-2CgXlQAWE6QKeoDdwEd2Ll802wkMBSwZyiHr/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Culture": [
          [
            "日本のハロウィーン  Halloween in Japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vT_IUBarESTPJC-wZ5j3l06NVjaTkApUcr5nw9v6GhL58CfC_j8I8UwFbaQDm38k3rKqtECGxpSqfJ0/embed?start=false&loop=false&delayms=300",
          ],
          [
            "Japanese swords 日本刀 にほんとう",
            "https://docs.google.com/presentation/d/e/2PACX-1vRTZSWqsmtlZh-X8WmdzZJkFeQHC0N7dzNfzN3pw3RcPc2m8sajAoCwDl0Wu_pf8LsGE8sCwmwm_MDA/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Shintoism in Japan : 神道",
            "https://docs.google.com/presentation/d/e/2PACX-1vQNKhdi7NienMk_p0FtwgN5N9aksdrpIDavy9hrJA8uctEeb1KxNB853LyG05I7UL7J3eR5yfMfCHM8/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "おばけ文化",
            "https://docs.google.com/presentation/d/e/2PACX-1vQkDtLo5N1HBlD_3Yoh6breoHZTWB9ezz6lqjWNk9wLCOeNslwMCpBtFEO5md0pbRIRC3rAluaWyOxv/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japanese kid's dream job in 2020",
            "https://docs.google.com/presentation/d/e/2PACX-1vSx_sPe5JVHnBkbar9rkWPrivSmrLC_TCBwvvd-fLVpYZBTD3XGCr7bM74w6wwubOceR4Vyd-APr3T_/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Fukushima": [
          [
            "Fukushima: A Journey of disaster Memory and Resolve",
            "https://docs.google.com/presentation/d/e/2PACX-1vRgeOya_RCBOcavjTSjjJCbTgdV7z3BBjZQA66r3ZWamg4cABiK4yV2mhggO2vVm8EbHDXq7a6CwKEy/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Visit to Disaster Striking Area",
            "https://docs.google.com/presentation/d/e/2PACX-1vRYPvEvZAjr_jedZUL-poeC46FcRq-o5CnsUcihkczZ3T8IF8_sdxd9SDydbk0V-5H6os4ycTs5flyp/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Fukushima Robot Test Field",
            "https://docs.google.com/presentation/d/e/2PACX-1vQN6KK20H2P9HdA06zl15SeYckrFZaFUsOl6xJ-qgykVnY8pcgHGHWEaWxCLat8MAv1KWryOPe7ITdx/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "JapaneseWritingSystem": [
          [
            "Japanese writing system",
            "https://docs.google.com/presentation/d/e/2PACX-1vRFafnkeaSHDdD8x0K5shLrmOglGhj3Df6rlbciwctXEOARE175Oefpc0VT7iFL83GWEgvBqJhsUVPi/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "SoundsOfJapanese": [
          [
            "Japanese Kana sound",
            "https://docs.google.com/presentation/d/e/2PACX-1vQMXoD3HY9E4pnVFlPry-nqN63_QI3ztPL5eF-2AkUWbKgAnBH1eX_Z2gn1bQ8HqfArviDse6begPbF/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japanese Sound & Proninciation",
            "https://docs.google.com/presentation/d/e/2PACX-1vTonH167bHQr-P3dsMro7nn-duOad7LiOnGrrm4dFWQth_bd7ZN6Zb5epMncYVrJ0_BFVRX-j4mDWFe/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "Sports": [
          [
            "SUMO すもう",
            "https://docs.google.com/presentation/d/e/2PACX-1vRhMK_NE0lwSd2fgA-IbrQtV5HHV4t_HhNPbZia4YmDB8Tia7nzlHNP2GSC97r4Lk8jYaVm8WQR0yE4/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "TimeExpressions": [
          [
            "Timing in Japanese ",
            "https://docs.google.com/presentation/d/e/2PACX-1vQ6rMTY2OX9KBccF9J_5L0kVTXhvkSukRiksoTTtwBBri9ZqpX3KLeFJ-S1CUFYt112RYG7ZXRL9KfD/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "OtherAnime": [
          [
            "Japanese Anime",
            "https://docs.google.com/presentation/d/e/2PACX-1vTqUnq1cujJ5R16l8mXB1TEAaSfxt8HtopUjk-2_5hVXWIKJFpQBiN7IuUJjpL7YQ/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Pokemon's Japanese & English names",
            "https://docs.google.com/presentation/d/e/2PACX-1vRfTRncF3RMN9S34MgIK92tBlCB8Pc-J-Ka4C03k-awLL4XIkkxn5VW4jz1e4wm7g9cgo5Nu9y5Ikts/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "DemonSlayer": [
          [
            "滝行 Takigyo, Japan’s Ancient Art of Waterfall Meditation",
            "https://docs.google.com/presentation/d/e/2PACX-1vTtHg03lEQf-OxkaubgkYTFQsHv6y9wlwEsRw12MY_2nuuU0WBMt38w4hZYFKG94XO9po3fkLS_acbD/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japanese swords in Japanese Manga & Anime 日本刀とポップカルチャー",
            "https://docs.google.com/presentation/d/e/2PACX-1vTavbUD1V2VTQmkLVI8Ex3YsxS9ORD95h1tM4vabP8wVuYmWR2G0l47sXbqQr22vCNb4Sj5axJe-O2L/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Anime & Shinto in Japan 日本のアニメと神道",
            "https://docs.google.com/presentation/d/e/2PACX-1vSdDdQzI63K8Wyr8n_tlSnr-53LdhQCyyFEpSLrfwWexnEBpFIMpFvz44ns2lUjM-7mHqZNout51iF8/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Japanese modern history with Demon Slayer",
            "https://docs.google.com/presentation/d/e/2PACX-1vRSHM9TrRkT70T1FM1LtidLCvpWTlrYJEtNnbyChWXD6Jhhs2Cr5-dLM5g1bqwwaQ7AhxbbKePZd2Fe/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "The Evolution of '鬼 Oni' :  From Japanese Folklore to Demon Slayer",
            "https://docs.google.com/presentation/d/e/2PACX-1vQwu3JN4hs3wCX7lvauxD444OV5PLpKp-8TTFYaRZ0tELzDd49ADahJou_AxJTJMrDLcv12v7h_u6RT/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "Total Concentration Breathing   全集中の呼吸 　(Zen shūchū no kokyū)",
            "https://docs.google.com/presentation/d/e/2PACX-1vT_WITCGlhI2i40_HFxFiF0ynAfgGgq3SVMUK57VuUZMAF6KZMEQy7OkMNZmJ-QymqUr0IwQc9Sxqkj/embed?start=false&loop=false&delayms=3000",
          ],
        ],
        "DailyLife": [
          [
            "にほんの こうつうシステム ",
            "https://docs.google.com/presentation/d/e/2PACX-1vSt3TVMO3HFr6uf8Vrqdx-A6sM3jmV2GSt2dM0UfDkhzbXMlRffuGN_17sNrLMXkLJUkah78CMDhW-O/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "School uniforms in Japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vSHHKRgUq5jzD_fAkNyt4PaHez352mc3jsRPUlRv_8VTFjqLf1dnMScFoq8yuv4TZNJ7YW8aBA7nX5E/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "School Life in Japan にほんのがっこうせいかつ",
            "https://docs.google.com/presentation/d/e/2PACX-1vRarzt-mZGgpYpRAiUoevDka-NyemcNGk9t8ksCbM2tmsyRdEvYfe1kom95D_4S7aI21fvBMdUsNy97/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "日本のコンビニ Convenience Stores In Japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vS5r1ZGB_IkfaOy39alQsSQ9Ltm3OPvLkTDC3PVofWfIvfXFFvIZvlhDCtTyHJfk_73TxwuDg4pR7jE/embed?start=false&loop=false&delayms=3000",
          ],
          [
            "僕の日本での生活 My life in japan",
            "https://docs.google.com/presentation/d/e/2PACX-1vQcuas8aqpqBGkNa7xiSW98L3eNU9SwhEIrthzg9iUKmUjzWQO6RPC5HRYInySpDOlysp3_Eutw5XML/embed?start=false&loop=false&delayms=3000",
          ],
        ],
}
def convert_to_categories(source):
    categories = []
    for category, items in source.items():
        formatted_items = [
            {"name": item[0], "embedLink": item[1], "image": f"/images/{category.lower()}-{i+1}.jpg"}
            for i, item in enumerate(items)
        ]
        categories.append({
            "name": category,
            "image": f"/images/{category.lower()}-category.jpg",
            "items": formatted_items
        })
    return categories

converted = {"categories": convert_to_categories(ListOfSources)}

# Save to JSON file
output_file = "contents.json"

def save_to_file(data, file_path):
    # Check if the file exists
    if os.path.exists(file_path):
        print(f"{file_path} already exists. Skipping save.")
    else:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Data saved to {file_path}")

save_to_file(converted, output_file)