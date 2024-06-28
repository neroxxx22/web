const quizData = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Marsella", "París", "Nantes", "Lyon"],
        correct: "París",
        image: "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
    },
   
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: "Ottawa",
        image: "https://content.r9cdn.net/rimg/dimg/66/6f/19cfcc07-city-9618-17782c76769.jpg?width=1366&height=768&xhint=2388&yhint=1183&crop=true"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        correct: "Canberra",
        image: "https://businessevents.australia.com/content/dam/digital/australia-com/images/canberra-city-guide-canberra-act.jpg"
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        options: ["São Paulo", "Brasilia", "Río de Janeiro", "Salvador"],
        correct: "Brasilia",
        image: "https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/brasilia.jpg?itok=WSt395z7"
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["San Petersburgo", "Moscú", "Kiev", "Varsovia"],
        correct: "Moscú",
        image: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg"
    },
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Arequipa", "Lima", "Trujillo", "Cusco"],
        correct: "Lima",
        image: "https://www.tours-machupicchu-peru.com/wp-content/uploads/2021/11/Lima-Capital-Peru.jpg"
    },
    {
        question: "¿Cuánto es 7 x 8?",
        options: ["54", "56", "58", "60"],
        correct: "56",
        image: "https://slideplayer.com/slide/3321269/11/images/75/7x8%3D.jpg"
    },
    {
        question: "¿Cuál es el resultado de 12 + 15?",
        options: ["27", "25", "30", "29"],
        correct: "27",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el valor de π (pi) aproximado?",
        options: ["3.14", "2.71", "1.62", "3.33"],
        correct: "3.14",
        image: "https://qph.cf2.quoracdn.net/main-qimg-622efbd6ed1ca66923d64b2950be455d-lq"
    },
    {
        question: "¿Cuál es el resultado de 9 - 4?",
        options: ["5", "6", "4", "3"],
        correct: "5",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 8 / 2?",
        options: ["4", "3", "2", "6"],
        correct: "4",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 5 x 6?",
        options: ["30", "25", "35", "40"],
        correct: "30",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 10 + 15?",
        options: ["25", "20", "30", "35"],
        correct: "25",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 49 / 7?",
        options: ["7", "6", "8", "5"],
        correct: "7",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 15 - 8?",
        options: ["7", "8", "6", "9"],
        correct: "7",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 3 x 9?",
        options: ["27", "18", "24", "21"],
        correct: "27",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 100 / 5?",
        options: ["20", "25", "15", "30"],
        correct: "20",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 18 + 7?",
        options: ["25", "24", "26", "23"],
        correct: "25",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 36 - 12?",
        options: ["24", "22", "26", "20"],
        correct: "24",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 5 x 7?",
        options: ["35", "30", "25", "40"],
        correct: "35",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 64 / 8?",
        options: ["8", "7", "6", "5"],
        correct: "8",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 27 + 18?",
        options: ["45", "43", "44", "46"],
        correct: "45",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correct: "Madrid",
        image: "https://media.cntraveler.com/photos/636529b1d36379b0d80f679d/16:9/w_1280,c_limit/Madrid_GettyImages-1175211342.jpg"
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["Múnich", "Dortmund", "Berlín", "Augsburgo"],
        correct: "Berlín",
        image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg"
    },
    {
        question: "¿Cuál es la capital de Reino Unido?",
        options: ["Mánchester", "Liverpool", "york", "Londres"],
        correct: "Londres",
        image: "https://www.universal-assistance.com/uablog/wp-content/uploads/2022/12/big-ben.png"
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Roma", "París", "Atenas", "Lisboa"],
        correct: "Roma",
        image: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg"
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio", "Bangkok"],
        correct: "Tokio",
        image: "https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg"
    },
    {
        question: "¿Cuánto es 50 - 25?",
        options: ["25", "30", "20", "35"],
        correct: "25",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 3 x 8?",
        options: ["24", "21", "18", "27"],
        correct: "24",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 81 / 9?",
        options: ["9", "8", "7", "6"],
        correct: "9",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 45 + 5?",
        options: ["50", "48", "55", "53"],
        correct: "50",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 70 - 30?",
        options: ["40", "50", "45", "35"],
        correct: "40",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 4 x 4?",
        options: ["16", "18", "14", "20"],
        correct: "16",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 100 / 4?",
        options: ["25", "30", "20", "35"],
        correct: "25",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuál es el resultado de 32 + 18?",
        options: ["50", "48", "52", "46"],
        correct: "50",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
    {
        question: "¿Cuánto es 90 - 45?",
        options: ["45", "40", "50", "35"],
        correct: "45",
        image: "https://i.pinimg.com/originals/0c/9c/46/0c9c4692dda55590b8475015d26b9fa6.png"
    },
        { 
            question: "¿Cuál es el sinónimo de 'feliz'?",
            options: ["Triste", "Contento", "Enojado", "Aburrido"],
            correct: "Contento",
            image: "https://i.pinimg.com/736x/15/af/fc/15affc3d5ebba3c66af1fe88e09b216a.jpg"
        },
        { 
            question: "¿Cuál es el antónimo de 'alto'?",
            options: ["Bajo", "Grande", "Pequeño", "Fuerte"],
            correct: "Bajo",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Qué tipo de oración es '¿Cómo estás?'?",
            options: ["Interrogativa", "Declarativa", "Exclamativa", "Imperativa"],
            correct: "Interrogativa",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Qué tipo de palabra es 'lento'?",
            options: ["Adjetivo", "Adverbio", "Verbo", "Sustantivo"],
            correct: "Adjetivo",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Cuál es el plural de 'lápiz'?",
            options: ["Lápizes", "Lápices", "Lápizs", "Lápiz"],
            correct: "Lápices",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Cuál es la correcta ortografía de 'mariposa'?",
            options: ["Mariposa", "Maríposa", "Máriposa", "Mariposá"],
            correct: "Mariposa",
            image: "https://www.creativefabrica.com/wp-content/uploads/2023/07/25/Pretty-Butterflies-Flying-Pink-Purple-Gradient-Cartoon-Clip-Art-Beautiful-75365453-1.png"
        },
        { 
            question: "¿Qué tipo de palabra es 'rápido'?",
            options: ["Adjetivo", "Verbo", "Adverbio", "Sustantivo"],
            correct: "Adjetivo",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Cuál es el sinónimo de 'grande'?",
            options: ["Gigante", "Pequeño", "Mediano", "Chico"],
            correct: "Gigante",
            image: "https://previews.123rf.com/images/darrenwhi/darrenwhi1211/darrenwhi121100012/16534024-ilustraci%C3%B3n-de-un-elefante-grande.jpg"
        },
        { 
            question: "¿Cuál es el antónimo de 'feliz'?",
            options: ["Triste", "Contento", "Enojado", "Aburrido"],
            correct: "Triste",
            image: "https://img.freepik.com/vector-premium/nino-feliz-esta-muy-emocionado-alegre-despues-escuela_33070-6988.jpg?w=360"
        },
        { 
            question: "¿Quién fue el primer presidente del Perú?",
            options: ["Simón Bolívar", "José de San Martín", "Francisco de Paula Santander", "José de la Riva-Agüero"],
            correct: "José de la Riva-Agüero",
            image: "https://www.iperu.org/wp-content/uploads/2016/08/jose-de-la-mar.jpg"
        },
        { 
            question: "¿Cuál fue la capital del Imperio Inca?",
            options: ["Lima", "Cuzco", "Arequipa", "Trujillo"],
            correct: "Cuzco",
            image: "https://viajerosocultos.com/wp-content/uploads/2022/12/aerial-view-of-the-plaza-armas-in-cusco.jpg"
        },
        { 
            question: "¿Quién fue el líder de la independencia del Perú?",
            options: ["Simón Bolívar", "José de San Martín", "Antonio José de Sucre", "José María Morelos"],
            correct: "José de San Martín",
            image: "https://www.clarin.com/2018/08/12/HkfKeD18X_720x0__1.jpg"
        },
        { 
            question: "¿Qué civilización construyó Machu Picchu?",
            options: ["Incas", "Mayas", "Aztecas", "Toltecas"],
            correct: "Incas",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Matrimonio_de_Mart%C3%ADn_de_Loyola_con_do%C3%B1a_Beatriz_%C3%91usta%2C_y_de_Don_Juan_Borja_con_Lorenza_%C3%91usta_%28Nobleza_Inca%29.jpg/640px-Matrimonio_de_Mart%C3%ADn_de_Loyola_con_do%C3%B1a_Beatriz_%C3%91usta%2C_y_de_Don_Juan_Borja_con_Lorenza_%C3%91usta_%28Nobleza_Inca%29.jpg"
        },
        { 
            question: "¿En qué año se proclamó la independencia del Perú?",
            options: ["1821", "1824", "1810", "1820"],
            correct: "1821",
            image: "https://ojo.pe/resizer/tIS7Fr6wrMTwZZTFHjaoDcGuoZU=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7CG7VRB26BE43LJKUJXSJBAHIU.jpg"
        },
        { 
            question: "¿Cuál es la danza tradicional del Perú?",
            options: ["Samba", "Cueca", "Marinera", "Tango"],
            correct: "Marinera",
            image: "https://denomades.imgix.net/destinos/trujillo/823/marinera-nortena.jpg"
        },
        { 
            question: "¿Qué ciudad fue fundada por Francisco Pizarro en 1535?",
            options: ["Lima", "Cuzco", "Arequipa", "Trujillo"],
            correct: "Lima",
            image: "https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg"
        },
        { 
            question: "¿Qué civilización construyó las Líneas de Nazca?",
            options: ["Nazca", "Incas", "Mayas", "Aztecas"],
            correct: "Nazca",
            image: "https://picchutravel.com/wp-content/uploads/las-lineas-de-nazca.jpg"
        },
        { 
            question: "¿Qué civilización construyó la ciudadela de Chan Chan?",
            options: ["Chimú", "Incas", "Mayas", "Aztecas"],
            correct: "Chimú",
            image: "https://andeangreattreks.com/wp-content/uploads/CIUDADELA-CHAN-CHAN-BY-ANDEAN-GREAT-TREKS-2.jpg"
        },
        { 
            question: "¿Quién fue el último emperador inca?",
            options: ["Atahualpa", "Huáscar", "Manco Cápac", "Pachacútec"],
            correct: "Atahualpa",
            image: "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2023/03/inca-atahualpa-gobernador.jpg"
        },
        { 
            question: "¿Qué país no limitaba con el Imperio Inca?",
            options: ["Chile", "Argentina", "Ecuador", "Brasil"],
            correct: "Brasil",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzq8WYuhgrPjEvFxIl_xH6bIINA4MdtxgKw&s"
        },
        { 
            question: "¿Cuál es el sitio arqueológico más antiguo del Perú?",
            options: ["Machu Picchu", "Caral", "Chan Chan", "Nazca"],
            correct: "Caral",
            image: "https://www.elbrujo.pe/storage/noticias/June2021/caral-ciudad-sagrada-con-mas-de-5000-a%C3%B1os-de-historia1.jpg"
        },
        { 
            question: "¿Qué civilización preincaica se destacó en la metalurgia?",
            options: ["Moche", "Nazca", "Chavín", "Chimú"],
            correct: "Chimú",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsK55df5x6NPK6Ao7-I-Aq8zqNiW8fySxNPA&s"
        },
        { 
            question: "¿Cuál fue el primer país en reconocer la independencia del Perú?",
            options: ["Estados Unidos", "Argentina", "Brasil", "Chile"],
            correct: "Estados Unidos",
            image: "https://www.historiadelnuevomundo.com/wp-content/uploads/2017/06/independencia-del-peru-san-martin.jpg"
        },
        { 
            question: "¿Qué batalla selló la independencia del Perú?",
            options: ["Batalla de Junín", "Batalla de Ayacucho", "Batalla de San Lorenzo", "Batalla de Chacabuco"],
            correct: "Batalla de Ayacucho",
            image: "https://elperuano.pe/fotografia//thumbnail/2021/12/09/000141911M.jpg"
        },
        { 
            question: "¿Cuál es el nombre del dios creador en la mitología inca?",
            options: ["Viracocha", "Inti", "Pachamama", "Manco Cápac"],
            correct: "Viracocha",
            image: "https://pueblosoriginarios.com/sur/andina/inca/imagenes/viracocha.jpg"
        },
        { 
            question: "¿Cuál es la lengua indígena más hablada en el Perú?",
            options: ["Quechua", "Aymara", "Guaraní", "Mapudungún"],
            correct: "Quechua",
            image: "https://picchutravel.com/wp-content/uploads/quechua-el-idioma-de-los-incas.jpg"
        },
        { 
            question: "¿Qué civilización construyó el Templo del Sol en Cuzco?",
            options: ["Incas", "Mayas", "Aztecas", "Chimú"],
            correct: "Incas",
            image: "https://lh6.googleusercontent.com/proxy/hABKdOR0Q6ahWlrw8sqEmVJSa8e4f2em9hehcgzUBBV3q_EevVVwpWbj8dT3XKMRYQ4bf7PQzCK1"
        },
        { 
            question: "¿Quién fue el primer virrey del Perú?",
            options: ["Francisco Álvarez de Toledo", "Blasco Núñez Vela", "Diego López de Zúñiga", "Pedro de la Gasca"],
            correct: "Blasco Núñez Vela",
            image: "https://d3wo5wojvuv7l.cloudfront.net/t_square_limited_480/images.spreaker.com/original/8b14c6202e85f19fbac03cd8bcf8974c.jpg"
        },
        { 
            question: "¿Qué ciudad fue fundada por los españoles en 1534?",
            options: ["Cuzco", "Lima", "Arequipa", "Trujillo"],
            correct: "Arequipa",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xFhcXXye18Ov4PL0o9zDZTf68pGOABX3LA&s"
        },
        { 
            question: "¿Cuál fue el principal centro religioso de la cultura Chavín?",
            options: ["Chavín de Huántar", "Chan Chan", "Machu Picchu", "Nazca"],
            correct: "Chavín de Huántar",
            image: "https://via.placeholder.com/400x300?text=Historia+del+Perú"
        },
        { 
            question: "¿Quién fue el líder del levantamiento de Túpac Amaru II?",
            options: ["José Gabriel Condorcanqui", "Micaela Bastidas", "Juan Santos Atahualpa", "Pedro Vilca Apaza"],
            correct: "José Gabriel Condorcanqui",
            image: "https://historiaperuana.pe/wp-content/uploads/Jose-gabriel-condorcanqui.jpg"
        },
        { 
            question: "¿En qué año se realizó la Guerra del Pacífico?",
            options: ["1879-1883", "1864-1870", "1885-1889", "1850-1855"],
            correct: "1879-1883",
            image: "https://historia.nationalgeographic.com.es/medio/2023/09/27/batalla-de-arica_f76b7990_230927121720_1280x906.jpg"
        },
        { 
            question: "¿Qué presidente peruano nacionalizó el petróleo en 1968?",
            options: ["Juan Velasco Alvarado", "Fernando Belaúnde Terry", "Alan García", "Alberto Fujimori"],
            correct: "Juan Velasco Alvarado",
            image: "https://www.biografiasyvidas.com/biografia/v/fotos/velasco_alvarado.jpg"
        }, 
        { 
            question: "¿Qué tipo de palabra es 'corriendo'?",
            options: ["Verbo", "Sustantivo", "Adjetivo", "Adverbio"],
            correct: "Verbo",
            image: "https://img.freepik.com/vector-gratis/vector-silueta-icono-humano-corriendo-sombra-aislado-blanco_1284-42615.jpg"
        },
        { 
            question: "¿Cuál es una palabra aguda?",
            options: ["Árbol", "Caminó", "Árboles", "Canción"],
            correct: "Canción",
            image: "https://i.pinimg.com/474x/0a/c2/74/0ac2748e559a4a5eb1011773500fea7b.jpg"
        },
        { 
            question: "¿Cuál es una palabra esdrújula?",
            options: ["Árbol", "Teléfono", "Caminó", "Mesa"],
            correct: "Teléfono",
            image: "https://i.pinimg.com/474x/0a/c2/74/0ac2748e559a4a5eb1011773500fea7b.jpg"
        },
        { 
            question: "¿Cuál es el plural de 'pez'?",
            options: ["Peces", "Pezes", "Pezs", "Pez"],
            correct: "Peces",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeXy_nBeZe9-a_MSZyyF2b0alyz2mqM_sYA&s"
        },
        { 
            question: "¿Cuál es una palabra homónima de 'vaca'?",
            options: ["Baca", "Vaka", "Bakka", "Vakka"],
            correct: "Baca",
            image: "https://img.freepik.com/vector-gratis/vaca-sonriente-ilustracion-vectorial-dibujos-animados_96037-417.jpg"
        },
        { 
            question: "¿Qué tipo de palabra es 'rápidamente'?",
            options: ["Adverbio", "Adjetivo", "Verbo", "Sustantivo"],
            correct: "Adverbio",
            image: "https://previews.123rf.com/images/prettyvectors/prettyvectors1612/prettyvectors161200111/67601286-runner-sport-man-personaje-corre-r%C3%A1pido-ilustraci%C3%B3n-de-dibujos-animados-plana.jpg"
        },
        { 
            question: "¿Cuál es la correcta ortografía de 'nariz'?",
            options: ["Naris", "Naríz", "Nares", "Nariz"],
            correct: "Nariz",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-bxjyl&psig=AOvVaw2Cf8TTPMujTBd3s10Rqagw&ust=1719450748282000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjp5rKL-IYDFQAAAAAdAAAAABAE"
        },
        { 
            question: "¿Qué tipo de oración es 'Juan come una manzana'?",
            options: ["Declarativa", "Interrogativa", "Exclamativa", "Imperativa"],
            correct: "Declarativa",
            image: "https://img.freepik.com/vector-premium/nino-dibujos-animados-comiendo-manzana-sobre-fondo-blanco_70172-1853.jpg?w=360"
        },
        { 
            question: "¿Cuál es el sinónimo de 'grande'?",
            options: ["Pequeño", "Gigante", "Mediano", "Chico"],
            correct: "Gigante",
            image: "https://previews.123rf.com/images/onime/onime1706/onime170600120/80961430-ilustraci%C3%B3n-de-dibujos-animados-de-una-ballena-grande-feliz-sobre-fondo-blanco-aislado.jpg"
        },
        { 
            question: "¿Qué tipo de palabra es 'fuerte'?",
            options: ["Adjetivo", "Verbo", "Adverbio", "Sustantivo"],
            correct: "Adjetivo",
            image: "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-mens-health-and-fitness-png-image_2815142.jpg"
        },
        { 
            question: "¿Cuál es el antónimo de 'rápido'?",
            options: ["Lento", "Ágil", "Ligero", "Veloz"],
            correct: "Lento",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Qué tipo de palabra es 'mesa'?",
            options: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"],
            correct: "Sustantivo",
            image: "https://i.pinimg.com/736x/09/cd/5d/09cd5dde9dd0d270fd02f5a5badde902.jpg"
        },
        { 
            question: "¿Cuál es una palabra grave?",
            options: ["Caminó", "Teléfono", "Mesa", "Canción"],
            correct: "Mesa",
            image: "https://img.freepik.com/vector-premium/nino-pensando-mientras-escribe-algo-papel_7710-167.jpg?w=360"
        },
        { 
            question: "¿Cuál es la forma correcta de 'oído'?",
            options: ["Oído", "Oido", "óído", "Oídó"],
            correct: "Oído",
            image: "https://i.pinimg.com/736x/c2/72/c9/c272c95fcf0ff4ec12fba1f6cd895456.jpg"
        },
        { 
            question: "¿Cuál es el sinónimo de 'pequeño'?",
            options: ["Grande", "Chico", "Mediano", "Gigante"],
            correct: "Chico",
            image: "https://i.pinimg.com/736x/eb/b9/ff/ebb9ffa14d3854d4550b20293a4ccc7e.jpg"
        },
        { 
            question: "¿Cuál es el antónimo de 'feliz'?",
            options: ["Contento", "Triste", "Enojado", "Aburrido"],
            correct: "Triste",
            image: "https://us.123rf.com/450wm/watcartoon/watcartoon2302/watcartoon230200105/198100392-ni%C3%B1os-felices-pensando-en-sentarse-y-descansar-la-barbilla-en-las-manos.jpg?ver=6"
        },
        { 
            question: "¿Cuál es el elemento más abundante en la corteza terrestre?", 
            options: ["Oxígeno", "Silicio", "Aluminio", "Hierro"], 
            correct: "Oxígeno", 
            image: "https://img.ecologiahoy.com/2012/03/Ox%C3%ADgeno.jpg" 
        },
        { 
            question: "¿Qué gas es necesario para la respiración humana?", 
            options: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Dióxido de carbono"], 
            correct: "Oxígeno", 
            image: "https://c.files.bbci.co.uk/159E9/production/_98735588_respirar6.jpg" 
        },
        { 
            question: "¿Qué planeta es conocido como el planeta rojo?", 
            options: ["Marte", "Venus", "Júpiter", "Saturno"], 
            correct: "Marte", 
            image: "https://humanidades.com/wp-content/uploads/2017/03/sistema-solar-e1564771406947-800x400.jpg" 
        },
        { 
            question: "¿Qué tipo de animal es una ballena?", 
            options: ["Mamífero", "Pez", "Reptil", "Ave"], 
            correct: "Mamífero", 
            image: "https://c.files.bbci.co.uk/653B/production/_95151952_mediaitem95151800.jpg" 
        },
        { 
            question: "¿Qué órgano del cuerpo humano bombea sangre?", 
            options: ["Corazón", "Pulmón", "Hígado", "Riñón"], 
            correct: "Corazón", 
            image: "https://i.pinimg.com/originals/25/a5/c5/25a5c5bc4c783d982cd4ae98fe34f114.jpg" 
        },
        { 
            question: "¿Qué es la fotosíntesis?", 
            options: ["Proceso por el cual las plantas producen su alimento", "Descomposición de materia orgánica", "Ciclo del agua", "Formación de rocas sedimentarias"], 
            correct: "Proceso por el cual las plantas producen su alimento", 
            image: "https://content.elmueble.com/medio/2019/03/25/monstera_f97f4746_800x800.jpg" 
        },
        { 
            question: "¿Cuál es la fórmula química del agua?", 
            options: ["H2O", "CO2", "O2", "NaCl"], 
            correct: "H2O", 
            image: "https://s2.abcstatics.com/abc/www/multimedia/ciencia/2023/06/09/nature-water-drops-of-water-liqsd-RIOIu8s7mQFTuLzV4aIjU8N-1200x840@abc.jpg" 
        },
        { 
            question: "¿Cuál es la estrella más cercana a la Tierra?", 
            options: ["Sol", "Proxima Centauri", "Alpha Centauri", "Sirius"], 
            correct: "Sol", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gEdIO9FdL3_fZQ2_bzTb1Shu5SiT9lE7cg&s" 
        },
        { 
            question: "¿Qué es un átomo?", 
            options: ["La unidad más pequeña de un elemento químico", "Una molécula", "Un compuesto", "Un ion"], 
            correct: "La unidad más pequeña de un elemento químico", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL-L-a9_3SSTZEzNVsq3qv3g7X0IEN0Ig3A&s" 
        },
        { 
            question: "¿Qué tipo de energía se obtiene del sol?", 
            options: ["Solar", "Eólica", "Hidráulica", "Geotérmica"], 
            correct: "Solar", 
            image: "https://imagenes.muyinteresante.com/files/image_414_276/uploads/2023/05/11/645ca2cb29f8b.jpeg" 
        },
        { 
            question: "¿Cuál es el planeta más grande del sistema solar?", 
            options: ["Júpiter", "Saturno", "Urano", "Neptuno"], 
            correct: "Júpiter", 
            image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-545864039-1651242098.jpg?resize=980:*" 
        },
        { 
            question: "¿Qué gas es el principal componente del aire?", 
            options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], 
            correct: "Nitrógeno", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55i1F0ikkGjAUWMejnY7AIcZzpZmgKOYFBw&s" 
        },
        { 
            question: "¿Qué causa la marea alta y la marea baja?", 
            options: ["Gravedad de la luna", "Rotación de la Tierra", "Viento", "Corrientes oceánicas"], 
            correct: "Gravedad de la luna", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqdI8nsHlSvqbjn4S-bMEKAq9_3xqOzZYdw&s" 
        },
        { 
            question: "¿Cuál es el órgano más grande del cuerpo humano?", 
            options: ["Piel", "Corazón", "Hígado", "Pulmón"], 
            correct: "Piel", 
            image: "https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-various-human-skin-conditions-young-graphic-people-vector-png-image_37072470.png" 
        },
        { 
            question: "¿Qué tipo de roca se forma a partir de lava enfriada?", 
            options: ["Ígnea", "Sedimentaria", "Metamórfica", "Mármol"], 
            correct: "Ígnea", 
            image: "https://previews.123rf.com/images/jomo333/jomo3331605/jomo333160500015/58725515-lava-enfriada-que-muestra-un-patr%C3%B3n-de-remolino-interesante.jpg" 
        },
        { 
            question: "¿Cuál es la principal fuente de energía para la vida en la Tierra?", 
            options: ["Sol", "Agua", "Viento", "Geotérmica"], 
            correct: "Sol", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jtxhN7VDHAek_GojOHXYzGLUVL3PCO5u5g&s" 
        },
        { 
            question: "¿Qué célula es la unidad básica de la vida?", 
            options: ["Célula", "Átomo", "Molécula", "Compuesto"], 
            correct: "Célula", 
            image: "https://img.freepik.com/vector-gratis/diagrama-celulas-animales-colores_1308-15232.jpg" 
        },
        { 
            question: "¿Qué es la fuerza de gravedad?", 
            options: ["La atracción entre dos masas", "La resistencia al movimiento", "La energía cinética", "La energía potencial"], 
            correct: "La atracción entre dos masas", 
            image: "https://cdn-icons-png.flaticon.com/512/3854/3854292.png" 
        },
        { 
            question: "¿Cuál es el estado del agua a 100 grados Celsius?", 
            options: ["Gaseoso", "Líquido", "Sólido", "Plasma"], 
            correct: "Gaseoso", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRLurXmG_2yATHcGEYLndHC2Np5r2SxroPQ&s" 
        },
        { 
            question: "¿Qué planeta tiene un sistema de anillos?", 
            options: ["Saturno", "Júpiter", "Urano", "Neptuno"], 
            correct: "Saturno", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZE8BjpUpjR48AGMimRXMSxzFa4cOSayrWA&s" 
        },
        { 
            question: "¿Qué proceso convierte el agua en vapor?", 
            options: ["Evaporación", "Condensación", "Fusión", "Solidificación"], 
            correct: "Evaporación", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0e3EEOh8W1uarhDJRWMvpdLaTEEbmEcYFp0-7wrgLzDsw1Qo0m5SEh38cLxYUYuz25XM&usqp=CAU" 
        },
        { 
            question: "¿Qué animal es conocido por su capacidad de cambiar de color?", 
            options: ["Camaleón", "Pulpo", "Sepia", "Pez piedra"], 
            correct: "Camaleón", 
            image: "https://mfe.losandes.com.ar/uploads/2020/04/image5e9b720b4cd01.jpg" 
        },
        { 
            question: "¿Qué planeta es conocido como el gemelo de la Tierra?", 
            options: ["Venus", "Marte", "Mercurio", "Neptuno"], 
            correct: "Venus", 
            image: "https://www.ngenespanol.com/wp-content/uploads/2023/06/venus-asi-es-el-planeta-mas-calido-del-sistema-solar-770x431.jpg" 
        },
        { 
            question: "¿Qué es una galaxia?", 
            options: ["Un conjunto de estrellas, planetas y gas", "Un sistema solar", "Un planeta", "Un cometa"], 
            correct: "Un conjunto de estrellas, planetas y gas", 
            image: "https://concepto.de/wp-content/uploads/2019/07/galaxia-e1561948087438-800x400.jpg" 
        },
        { 
            question: "¿Qué tipo de animal es una rana?", 
            options: ["Anfibio", "Reptil", "Ave", "Mamífero"], 
            correct: "Anfibio", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DgSBTyTIJvjXAb1ku-jNcle0i1hACrBVbw&s" 
        },
        { 
            question: "¿Cuál es el símbolo químico del oro?", 
            options: ["Au", "Ag", "Fe", "O"], 
            correct: "Au", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFJ_XtEYXkGvydbEVlJHhDOHK1uaM7YdZTQ&s" 
        },
        { 
            question: "¿Qué planeta es conocido por tener una gran mancha roja?", 
            options: ["Júpiter", "Saturno", "Marte", "Neptuno"], 
            correct: "Júpiter", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hG1xXuP3oECAxs_NtQ-g7qRmRGatZXg4oA&s" 
        },
        { 
            question: "¿Qué gas es conocido como gas de efecto invernadero?", 
            options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Argón"], 
            correct: "Dióxido de carbono", 
            image: "https://cdn.shopify.com/s/files/1/0677/4059/8571/articles/co2_Desk_b.jpg?v=1705573944" 
        },
        { 
            question: "¿Cuál es el metal más ligero?", 
            options: ["Litio", "Aluminio", "Hierro", "Plomo"], 
            correct: "Litio", 
            image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/22/16479592515934.jpg" 
        }

];

let currentQuestionIndex = 0;
let preguntasRealizadas = [];
let score = 0;
let countdown;
let nextQuestionTimeout;

document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const timerElement = document.getElementById('timer');
    const questionImageElement = document.getElementById('question-image');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    const backgroundSound = document.getElementById('background-sound');
    backgroundSound.volume = 0.3;

    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const scoreElement = document.getElementById('score');
    const resultImage = document.getElementById('result-image');
    const startButton = document.getElementById('start-button');
    const startContainer = document.getElementById('start-container');
    const quizContent = document.getElementById('quiz-content');
    const muteButton = document.getElementById('mute-button');

    const cantidadPreguntas = 10;

    quizContent.style.display = 'none';
    resultContainer.style.display = 'none';

    startButton.addEventListener('click', () => {
        startContainer.style.display = 'none';
        quizContent.style.display = 'block';
        playBackgroundSound();
        loadQuestion();
    });

    muteButton.addEventListener('click', toggleMute);

    function loadQuestion() {
        if (preguntasRealizadas.length === cantidadPreguntas) {
            showResults();
            return;
        }

        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * quizData.length);
        } while (preguntasRealizadas.includes(numeroAleatorio));

        currentQuestionIndex = numeroAleatorio;
        preguntasRealizadas.push(currentQuestionIndex);

        timer();

        const currentQuestion = quizData[currentQuestionIndex];

        questionElement.textContent = currentQuestion.question;
        questionImageElement.src = currentQuestion.image;
        questionImageElement.alt = "Imagen de " + currentQuestion.correct;
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';

        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('button');
            optionElement.textContent = option;
            optionElement.classList.add('option');
            optionElement.addEventListener('click', () => selectOption(option, optionElement));
            optionsElement.appendChild(optionElement);
        });
    }

    function selectOption(selectedOption, selectedElement) {
        const currentQuestion = quizData[currentQuestionIndex];

        const correctOptionElement = [...optionsElement.children].find(child => child.textContent === currentQuestion.correct);
        if (selectedOption === currentQuestion.correct) {
            score++;
            selectedElement.classList.add('correct');
            correctSound.volume = 1;
            correctSound.play();
            showConfetti(); // Mostrar la animación de confeti
        } else {
            selectedElement.classList.add('incorrect');
            incorrectSound.volume = 1;
            incorrectSound.play();
        }

        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent !== currentQuestion.correct) {
                option.classList.add('incorrect');
            }
        });

        correctOptionElement.classList.add('correct');

        clearInterval(countdown);
        disableOptions();
        showNextButton();

        nextQuestionTimeout = setTimeout(loadQuestion, 2000);
    }

    function showNextButton() {
        nextButton.style.display = 'block';
        nextButton.onclick = () => {
            clearTimeout(nextQuestionTimeout);
            loadQuestion();
        };
    }

    function showResults() {
        clearInterval(countdown); 
        clearTimeout(nextQuestionTimeout);
        quizContent.style.display = 'none';
        resultContainer.style.display = 'block';

        if (score <= 5) {
            resultImage.src = '../src/image/carita triste.png'; 
            resultMessage.textContent = "¡Vaya! Has obtenido una puntuación baja.";
        } else {
            resultImage.src = '../src/image/carita feliz.png';
            resultMessage.textContent = "Felicidades has obtenido una puntuacion alta";
        }

        scoreElement.textContent = `Puntuación: ${score} de ${cantidadPreguntas}`;
        muteAllSounds();
    }

    function timer() {
        let tiempoRestante = 15;
        timerElement.textContent = tiempoRestante;

        countdown = setInterval(() => {
            tiempoRestante--;
            timerElement.textContent = tiempoRestante;

            if (tiempoRestante === 0) {
                clearInterval(countdown);
                handleTimeout();
            }
        }, 1000);
    }

    function handleTimeout() {
        const currentQuestion = quizData[currentQuestionIndex];

        const correctOptionElement = [...optionsElement.children].find(child => child.textContent === currentQuestion.correct);
        optionsElement.querySelectorAll('.option').forEach(option => {
            if (option.textContent !== currentQuestion.correct) {
                option.classList.add('incorrect');
            }
        });

        correctOptionElement.classList.add('correct');

        incorrectSound.volume = 1;
        incorrectSound.play();

        disableOptions();
        showNextButton();

        nextQuestionTimeout = setTimeout(loadQuestion, 2000);
    }

    function disableOptions() {
        optionsElement.querySelectorAll('.option').forEach(option => {
            option.disabled = true;
        });
    }

    function playBackgroundSound() {
        backgroundSound.play();
    }

    function muteAllSounds() {
        correctSound.pause();
        incorrectSound.pause();
        backgroundSound.pause();
    }

    function toggleMute() {
        if (backgroundSound.paused) {
            correctSound.play();
            incorrectSound.play();
            backgroundSound.play();
            muteButton.textContent = 'Mute Sounds';
        } else {
            correctSound.pause();
            incorrectSound.pause();
            backgroundSound.pause();
            muteButton.textContent = 'Unmute Sounds';
        }
    }

    function showConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#bb0000', '#ffffff']
        });
    }
});