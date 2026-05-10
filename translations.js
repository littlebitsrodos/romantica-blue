// =====================================================
// SEA TREE — Translations
// All text content in 4 languages: EN, ES, GR, FR
// =====================================================

const translations = {
  en: {
    // Meta / head tags (used by the per-locale build step)
    meta: {
      title: "Sea Tree | Vacation Rental in Paros, Greece",
      description: "Sea Tree — a unique vacation rental in Aliki Beach, Paros, Greece. The former legendary Romantica disco bar, transformed into a serene island retreat.",
      ogTitle: "Sea Tree | Vacation Rental in Paros, Greece",
      ogDescription: "From dance floor to dream stay — Sea Tree, a unique vacation rental in Aliki Beach, Paros. The former legendary Romantica disco bar, transformed into a serene island retreat.",
      twitterTitle: "Sea Tree | Paros, Greece",
      twitterDescription: "From dance floor to dream stay — Sea Tree, vacation rental in Aliki Beach, Paros."
    },

    // Accessibility
    a11y: {
      skipToMain: "Skip to main content"
    },

    // Navigation
    nav: {
      rhythm: "The Rhythm",
      home: "The Home",
      aliki: "Life in Aliki",
      availability: "Availability",
      inquiry: "Inquire"
    },

    // Hero
    hero: {
      title: "Live slowly by the water",
      tagline: "A seaside home in Aliki, Paros",
      subtitle: "For longer stays. For mornings that stretch. For time that feels like yours again.",
      inquire: "Tell us about your stay",
      discover: "Discover the rhythm"
    },

    // Rhythm Section
    rhythm: {
      label: "The Rhythm",
      title: "A Day at Sea Tree",
      subtitle: "This is what staying here feels like.",
      morning: {
        time: "Morning",
        title: "Light Through the Curtains",
        desc: "Wake when you wake. Coffee on the balcony, sea-light on kourasani walls. The fishing boats are already out. No rush."
      },
      midday: {
        time: "Midday",
        title: "Village Life",
        desc: "Walk to the bakery. Pick up tomatoes from the market. Swim at the sandy beach two minutes away. Come home for a late lunch."
      },
      afternoon: {
        time: "Afternoon",
        title: "Rest or Work",
        desc: "The house is cool and quiet. Starlink keeps you connected. The yoga room is yours. Or just read in the shade."
      },
      evening: {
        time: "Evening",
        title: "Golden Hour on the Terrace",
        desc: "Watch the light change over Aliki bay. Dinner at a taverna, or cook what you found at the market. The sea turns gold, then pink, then dark."
      }
    },

    // Home Section
    home: {
      label: "The Home",
      title: "Room to Stretch Out",
      p1: "100 square meters of light-filled space. Two bedrooms, two bathrooms, a full kitchen, and a yoga room with a view of the bay.",
      p2: "The terrace is the heart of the house: a covered daybed, dining for six, and the kind of sunset that stops conversation.",
      features: {
        bedrooms: "Bedrooms",
        bedroomsDesc: "King + twin beds",
        bathrooms: "Bathrooms",
        bathroomsDesc: "One en-suite",
        guests: "Guests",
        guestsDesc: "Ideal for 2-4"
      }
    },

    // Gallery
    gallery: {
      label: "Gallery",
      title: "The Space",
      subtitle: "Natural light. Stone floors. Cotton linens. Room to breathe.",
      viewAll: "View all photos"
    },

    // Amenities
    amenities: {
      label: "Amenities",
      title: "What We Provide",
      subtitle: "Simple, quality essentials for your stay",
      items: {
        wifi: { title: "Starlink Internet", desc: "Reliable high-speed connection" },
        ac: { title: "Air Conditioning", desc: "In every room" },
        kitchen: { title: "Full Kitchen", desc: "Cook with local ingredients" },
        parking: { title: "Free Public Parking", desc: "Street parking available" },
        terrace: { title: "Large Balcony", desc: "Southeast views, morning light" },
        washer: { title: "Washing Machine", desc: "For longer stays" },
        linens: { title: "100% Cotton Linens", desc: "Clean towels & bedding" },
        beach: { title: "Sea Towels", desc: "Provided for your beach days" }
      }
    },

    // Services (on request)
    services: {
      label: "On Request",
      title: "Add to Your Stay",
      subtitle: "Authentic Paros experiences, arranged for your dates",
      items: {
        cookingClass: { title: "Cooking Classes", desc: "Hands-on Greek cooking with a local chef" },
        privateChef: { title: "Private Chef", desc: "Breakfast, lunch, or dinner served at home" },
        yoga: { title: "Yoga Sessions", desc: "Morning classes on the terrace with a certified instructor" },
        bikeRental: { title: "Bike Rental", desc: "Explore the island at your own pace" },
        diving: { title: "Diving", desc: "Guided dives in crystal-clear Aegean waters" },
        walkingTours: { title: "Walking Tours", desc: "Discover hidden villages and ancient paths" }
      }
    },

    // Practical Info (check-in, house rules)
    practical: {
      label: "Good to Know",
      title: "Before You Arrive",
      checkin: { label: "Check-in", value: "3:00 PM – 6:00 PM" },
      checkout: { label: "Check-out", value: "Until 11:00 AM" },
      family: { title: "Family Friendly" },
      rules: [
        "No smoking indoors",
        "No pets",
        "No parties or events",
        "Quiet hours: 3:00 – 5:00 PM",
        "Children of all ages welcome — cots available free of charge"
      ]
    },

    // The Space (selling points)
    theSpace: {
      label: "The Space",
      title: "Room to Breathe",
      subtitle: "A place designed for rest and slow mornings",
      items: {
        bathrooms: { title: "2 Bathrooms", desc: "One en-suite, one shared" },
        yoga: { title: "Yoga Room", desc: "Dedicated space for practice" },
        balcony: { title: "Large Balcony", desc: "Southeast facing, morning sun" }
      }
    },

    // Waterfront Section
    waterfront: {
      label: "The Waterfront",
      title: "Steps from the Sea",
      rockyTitle: "A Quieter Shore",
      rockyDesc: "Below the terrace, a rocky coastline keeps this corner of Aliki peaceful. Crystal-clear water for swimming, snorkeling, or just watching the boats.",
      sandyTitle: "Sandy Beaches Nearby",
      sandyIntro: "Prefer sand between your toes? You have options:",
      sandy1: "Aliki Beach — 2 minute walk",
      sandy2: "Piso Aliki — 5 minute walk",
      sandy3: "Faragas Beach — 10 minute drive",
      note: "Good to know: the path to our shore is uneven. Water shoes recommended."
    },

    // Life in Aliki
    aliki: {
      label: "Life in Aliki",
      title: "A Village That Moves Slowly",
      subtitle: "Traditional fishing boats. Four family tavernas. One bakery. No crowds.",
      eating: {
        title: "Where to Eat",
        desc: "Four tavernas, all within walking distance. Fresh fish every day. Owners who remember your name by day three.",
        mouragio: "Waterfront tables, family-run 30 years",
        thalassamou: "Beachfront, grilled catch of the day",
        aliki: "Greek classics since 1974",
        balcony: "Simple, honest, local"
      },
      daily: {
        title: "Daily Needs",
        bakery: "Bakery — 2 min walk",
        market: "Mini market — 3 min walk",
        supermarket: "Supermarket — 5 min walk",
        pharmacy: "Pharmacy — 10 min drive"
      },
      getting: {
        title: "Getting Around",
        airport: "Airport — 5 min drive",
        port: "Parikia port — 15 min drive",
        naousa: "Naousa — 25 min drive",
        car: "A car is recommended"
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Availability",
      title: "Plan Your Stay",
      subtitle: "Check our availability and book your perfect dates",
      available: "Available",
      booked: "Booked",
      months: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },

    // Host Section
    host: {
      label: "A Note from Antonis",
      quote: "I grew up in this house. My father ran Romantica here for twenty years. When the music stopped, I wondered what this place could become. Now it is a home for people who want to stay a while — to work remotely, to write, to rest, to be still. If you are looking for a place to slow down, I would be glad to have you.",
      role: "Your host in Aliki"
    },

    // Romantica Section
    romantica: {
      label: "The Memory",
      title: "Before It Was Sea Tree",
      p1: "This blue house was once Romantica — for twenty years, the disco bar where islanders and travelers danced until sunrise. Ask the locals; they still remember.",
      p2: "The music is gone now. What remains is the building itself, the sea view that hasn't changed, and a quieter kind of rhythm. The soul of the place lives on — just differently."
    },

    // Inquiry Section
    inquiry: {
      label: "Your Stay",
      title: "Tell Us About Your Trip",
      subtitle: "We welcome longer stays. Tell us what you have in mind.",
      form: {
        name: "Your name",
        email: "Email",
        dates: "Dates (approximate)",
        guests: "Number of guests",
        message: "Tell us about your stay",
        submit: "Send Inquiry"
      },
      quick: {
        title: "Prefer to Talk?",
        desc: "Reach out directly. Antonis usually replies within a few hours.",
        whatsapp: "WhatsApp Antonis"
      },
      platforms: {
        note: "Already know your dates? You can also book on:"
      }
    },

    // Footer
    footer: {
      about: "A seaside home in Aliki, Paros. For longer stays, slower mornings, and time that feels like yours.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      phone: "+30 697 3286 811",
      email: "antocosto@gmail.com",
      address: "Aliki, Paros 844 00, Greece",
      copyright: "© 2026 Sea Tree. All rights reserved.",
      privacyLink: "Privacy Policy"
    },

    // Cookie consent banner (GA4 Consent Mode v2)
    consent: {
      text: "We use cookies to understand how this site is used. Analytics only — no advertising trackers.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more"
    }
  },

  es: {
    // Meta
    meta: {
      title: "Sea Tree | Alquiler Vacacional en Paros, Grecia",
      description: "Sea Tree — un alquiler vacacional único en la playa de Aliki, Paros, Grecia. El legendario disco bar Romantica, transformado en un refugio sereno de la isla.",
      ogTitle: "Sea Tree | Alquiler Vacacional en Paros, Grecia",
      ogDescription: "De la pista de baile al sueño — Sea Tree, un alquiler vacacional único en Aliki, Paros. El legendario disco bar Romantica, ahora un refugio sereno.",
      twitterTitle: "Sea Tree | Paros, Grecia",
      twitterDescription: "De la pista de baile al sueño — Sea Tree, alquiler vacacional en Aliki, Paros."
    },

    // Accessibility
    a11y: {
      skipToMain: "Saltar al contenido principal"
    },

    // Navigation
    nav: {
      rhythm: "El Ritmo",
      home: "La Casa",
      aliki: "Vida en Aliki",
      availability: "Disponibilidad",
      inquiry: "Consultar"
    },

    // Hero
    hero: {
      title: "Vive despacio junto al mar",
      tagline: "Una casa frente al mar en Aliki, Paros",
      subtitle: "Para estancias largas. Para mañanas que se alargan. Para tiempo que vuelve a ser tuyo.",
      inquire: "Cuéntanos sobre tu estancia",
      discover: "Descubre el ritmo"
    },

    // Rhythm Section
    rhythm: {
      label: "El Ritmo",
      title: "Un Día en Sea Tree",
      subtitle: "Así se siente estar aquí.",
      morning: {
        time: "Mañana",
        title: "Luz Entre las Cortinas",
        desc: "Despierta cuando despiertes. Café en el balcón, luz marina en paredes de kourasani. Los barcos de pesca ya están fuera. Sin prisa."
      },
      midday: {
        time: "Mediodía",
        title: "Vida de Pueblo",
        desc: "Camina a la panadería. Compra tomates en el mercado. Nada en la playa de arena a dos minutos. Vuelve a casa para un almuerzo tardío."
      },
      afternoon: {
        time: "Tarde",
        title: "Descanso o Trabajo",
        desc: "La casa está fresca y tranquila. Starlink te mantiene conectado. La sala de yoga es tuya. O simplemente lee a la sombra."
      },
      evening: {
        time: "Atardecer",
        title: "Hora Dorada en la Terraza",
        desc: "Observa cómo cambia la luz sobre la bahía de Aliki. Cena en una taberna, o cocina lo que encontraste en el mercado. El mar se vuelve dorado, luego rosa, luego oscuro."
      }
    },

    // Home Section
    home: {
      label: "La Casa",
      title: "Espacio para Estirarse",
      p1: "100 metros cuadrados de espacio lleno de luz. Dos habitaciones, dos baños, cocina completa y una sala de yoga con vistas a la bahía.",
      p2: "La terraza es el corazón de la casa: un daybed cubierto, comedor para seis, y ese tipo de atardecer que detiene la conversación.",
      features: {
        bedrooms: "Habitaciones",
        bedroomsDesc: "Cama King + gemelas",
        bathrooms: "Baños",
        bathroomsDesc: "Uno en suite",
        guests: "Huéspedes",
        guestsDesc: "Ideal para 2-4"
      }
    },

    // Gallery
    gallery: {
      label: "Galería",
      title: "El Espacio",
      subtitle: "Luz natural. Suelos de piedra. Sábanas de algodón. Espacio para respirar.",
      viewAll: "Ver todas las fotos"
    },

    // Amenities
    amenities: {
      label: "Servicios",
      title: "Lo Que Ofrecemos",
      subtitle: "Esenciales simples y de calidad para tu estancia",
      items: {
        wifi: { title: "Internet Starlink", desc: "Conexión fiable de alta velocidad" },
        ac: { title: "Aire Acondicionado", desc: "En cada habitación" },
        kitchen: { title: "Cocina Completa", desc: "Cocina con ingredientes locales" },
        parking: { title: "Parking Público Gratuito", desc: "Aparcamiento en la calle disponible" },
        terrace: { title: "Gran Balcón", desc: "Vistas sureste, luz matutina" },
        washer: { title: "Lavadora", desc: "Para estancias largas" },
        linens: { title: "Sábanas 100% Algodón", desc: "Toallas y ropa de cama limpias" },
        beach: { title: "Toallas de Playa", desc: "Incluidas para tus días de playa" }
      }
    },

    // Services (on request)
    services: {
      label: "A Petición",
      title: "Añade a tu Estancia",
      subtitle: "Experiencias auténticas de Paros, organizadas para tus fechas",
      items: {
        cookingClass: { title: "Clases de Cocina", desc: "Cocina griega práctica con un chef local" },
        privateChef: { title: "Chef Privado", desc: "Desayuno, almuerzo o cena servidos en casa" },
        yoga: { title: "Sesiones de Yoga", desc: "Clases matutinas en la terraza con instructor certificado" },
        bikeRental: { title: "Alquiler de Bicicletas", desc: "Explora la isla a tu propio ritmo" },
        diving: { title: "Buceo", desc: "Inmersiones guiadas en aguas cristalinas del Egeo" },
        walkingTours: { title: "Rutas a Pie", desc: "Descubre pueblos escondidos y senderos antiguos" }
      }
    },

    // Practical Info (check-in, house rules)
    practical: {
      label: "Bueno Saber",
      title: "Antes de Llegar",
      checkin: { label: "Check-in", value: "3:00 PM – 6:00 PM" },
      checkout: { label: "Check-out", value: "Hasta las 11:00 AM" },
      family: { title: "Ideal para Familias" },
      rules: [
        "No fumar en interiores",
        "No se admiten mascotas",
        "No se permiten fiestas ni eventos",
        "Horas de silencio: 3:00 – 5:00 PM",
        "Niños de todas las edades bienvenidos — cunas disponibles gratis"
      ]
    },

    // The Space (selling points)
    theSpace: {
      label: "El Espacio",
      title: "Espacio para Respirar",
      subtitle: "Un lugar diseñado para descansar y mañanas lentas",
      items: {
        bathrooms: { title: "2 Baños", desc: "Uno en suite, uno compartido" },
        yoga: { title: "Sala de Yoga", desc: "Espacio dedicado para práctica" },
        balcony: { title: "Gran Balcón", desc: "Orientación sureste, sol matutino" }
      }
    },

    // Waterfront Section
    waterfront: {
      label: "El Paseo Marítimo",
      title: "A Pasos del Mar",
      rockyTitle: "Una Costa Más Tranquila",
      rockyDesc: "Bajo la terraza, una costa rocosa mantiene este rincón de Aliki en paz. Agua cristalina para nadar, bucear o simplemente observar los barcos.",
      sandyTitle: "Playas de Arena Cerca",
      sandyIntro: "¿Prefieres arena entre los dedos? Tienes opciones:",
      sandy1: "Playa Aliki — 2 minutos a pie",
      sandy2: "Piso Aliki — 5 minutos a pie",
      sandy3: "Playa Faragas — 10 minutos en coche",
      note: "Bueno saber: el camino a nuestra costa es irregular. Se recomiendan zapatos de agua."
    },

    // Life in Aliki
    aliki: {
      label: "Vida en Aliki",
      title: "Un Pueblo que Se Mueve Despacio",
      subtitle: "Barcos de pesca tradicionales. Cuatro tabernas familiares. Una panadería. Sin multitudes.",
      eating: {
        title: "Dónde Comer",
        desc: "Cuatro tabernas, todas a poca distancia. Pescado fresco cada día. Dueños que recuerdan tu nombre al tercer día.",
        mouragio: "Mesas frente al mar, familiar 30 años",
        thalassamou: "Frente a la playa, parrilla del día",
        aliki: "Clásicos griegos desde 1974",
        balcony: "Simple, honesto, local"
      },
      daily: {
        title: "Necesidades Diarias",
        bakery: "Panadería — 2 min a pie",
        market: "Mini mercado — 3 min a pie",
        supermarket: "Supermercado — 5 min a pie",
        pharmacy: "Farmacia — 10 min en coche"
      },
      getting: {
        title: "Cómo Moverse",
        airport: "Aeropuerto — 5 min en coche",
        port: "Puerto de Parikia — 15 min en coche",
        naousa: "Naousa — 25 min en coche",
        car: "Se recomienda un coche"
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Disponibilidad",
      title: "Planifica Tu Estancia",
      subtitle: "Consulta nuestra disponibilidad y reserva tus fechas perfectas",
      available: "Disponible",
      booked: "Reservado",
      months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    },

    // Host Section
    host: {
      label: "Una Nota de Antonis",
      quote: "Crecí en esta casa. Mi padre dirigió Romantica aquí durante veinte años. Cuando la música paró, me pregunté qué podría ser este lugar. Ahora es un hogar para personas que quieren quedarse un tiempo — para trabajar remotamente, para escribir, para descansar, para estar en calma. Si buscas un lugar para desacelerar, estaré encantado de recibirte.",
      role: "Tu anfitrión en Aliki"
    },

    // Romantica Section
    romantica: {
      label: "El Recuerdo",
      title: "Antes de Ser Sea Tree",
      p1: "Esta casa azul fue una vez Romantica — durante veinte años, la discoteca donde isleños y viajeros bailaban hasta el amanecer. Pregunta a los locales; todavía lo recuerdan.",
      p2: "La música ya no está. Lo que queda es el edificio, la vista al mar que no ha cambiado, y un ritmo más tranquilo. El alma del lugar sigue viva — solo de otra manera."
    },

    // Inquiry Section
    inquiry: {
      label: "Tu Estancia",
      title: "Cuéntanos Sobre Tu Viaje",
      subtitle: "Damos la bienvenida a estancias largas. Cuéntanos qué tienes en mente.",
      form: {
        name: "Tu nombre",
        email: "Email",
        dates: "Fechas (aproximadas)",
        guests: "Número de huéspedes",
        message: "Cuéntanos sobre tu estancia",
        submit: "Enviar Consulta"
      },
      quick: {
        title: "¿Prefieres Hablar?",
        desc: "Contacta directamente. Antonis suele responder en pocas horas.",
        whatsapp: "WhatsApp a Antonis"
      },
      platforms: {
        note: "¿Ya conoces tus fechas? También puedes reservar en:"
      }
    },

    // Footer
    footer: {
      about: "Una casa frente al mar en Aliki, Paros. Para estancias largas, mañanas lentas, y tiempo que vuelve a ser tuyo.",
      quickLinks: "Enlaces Rápidos",
      contactTitle: "Contacto",
      phone: "+30 697 3286 811",
      email: "info@seatree.gr",
      address: "Playa de Aliki, Paros 844 00, Grecia",
      copyright: "© 2026 Sea Tree. Todos los derechos reservados.",
      privacyLink: "Política de Privacidad"
    },

    // Cookie consent banner (GA4 Consent Mode v2)
    consent: {
      text: "Usamos cookies para entender cómo se utiliza este sitio. Solo analíticas — sin rastreadores publicitarios.",
      accept: "Aceptar",
      decline: "Rechazar",
      learnMore: "Más información"
    }
  },

  el: {
    // Meta
    meta: {
      title: "Sea Tree | Εξοχική Κατοικία στην Πάρο, Ελλάδα",
      description: "Sea Tree — μια μοναδική εξοχική κατοικία στην Αλυκή, Πάρος, Ελλάδα. Το θρυλικό disco bar Romantica, μεταμορφωμένο σε γαλήνιο νησιωτικό καταφύγιο.",
      ogTitle: "Sea Tree | Εξοχική Κατοικία στην Πάρο, Ελλάδα",
      ogDescription: "Από την πίστα χορού στο όνειρο — Sea Tree, μοναδική εξοχική κατοικία στην Αλυκή, Πάρο. Το θρυλικό disco bar Romantica, τώρα γαλήνιο καταφύγιο.",
      twitterTitle: "Sea Tree | Πάρος, Ελλάδα",
      twitterDescription: "Από την πίστα χορού στο όνειρο — Sea Tree, εξοχική κατοικία στην Αλυκή, Πάρος."
    },

    // Accessibility
    a11y: {
      skipToMain: "Μετάβαση στο κύριο περιεχόμενο"
    },

    // Navigation
    nav: {
      rhythm: "Ο Ρυθμός",
      home: "Το Σπίτι",
      aliki: "Ζωή στην Αλυκή",
      availability: "Διαθεσιμότητα",
      inquiry: "Επικοινωνία"
    },

    // Hero
    hero: {
      title: "Ζήσε αργά δίπλα στη θάλασσα",
      tagline: "Ένα σπίτι στην Αλυκή, Πάρος",
      subtitle: "Για μεγαλύτερες διαμονές. Για πρωινά που τεντώνονται. Για χρόνο που νιώθει ξανά δικός σου.",
      inquire: "Πες μας για τη διαμονή σου",
      discover: "Ανακάλυψε τον ρυθμό"
    },

    // Rhythm Section
    rhythm: {
      label: "Ο Ρυθμός",
      title: "Μια Μέρα στο Sea Tree",
      subtitle: "Έτσι νιώθεις να μένεις εδώ.",
      morning: {
        time: "Πρωί",
        title: "Φως Μέσα από τις Κουρτίνες",
        desc: "Ξύπνα όταν ξυπνήσεις. Καφές στο μπαλκόνι, θαλασσινό φως στους κουρασανί τοίχους. Τα ψαροκάικα έχουν ήδη βγει. Χωρίς βιασύνη."
      },
      midday: {
        time: "Μεσημέρι",
        title: "Ζωή Χωριού",
        desc: "Περπάτα μέχρι τον φούρνο. Πάρε ντομάτες από την αγορά. Κολύμπα στην αμμουδιά δύο λεπτά μακριά. Γύρνα για αργό μεσημεριανό."
      },
      afternoon: {
        time: "Απόγευμα",
        title: "Ξεκούραση ή Δουλειά",
        desc: "Το σπίτι είναι δροσερό και ήσυχο. Το Starlink σε κρατάει συνδεδεμένο. Η αίθουσα yoga είναι δική σου. Ή απλά διάβασε στη σκιά."
      },
      evening: {
        time: "Βράδυ",
        title: "Χρυσή Ώρα στη Βεράντα",
        desc: "Παρακολούθησε το φως να αλλάζει πάνω από τον κόλπο της Αλυκής. Δείπνο σε ταβέρνα, ή μαγείρεψε ό,τι βρήκες στην αγορά. Η θάλασσα γίνεται χρυσή, μετά ροζ, μετά σκοτεινή."
      }
    },

    // Home Section
    home: {
      label: "Το Σπίτι",
      title: "Χώρος να Απλωθείς",
      p1: "100 τετραγωνικά μέτρα γεμάτα φως. Δύο υπνοδωμάτια, δύο μπάνια, πλήρης κουζίνα και δωμάτιο yoga με θέα τον κόλπο.",
      p2: "Η βεράντα είναι η καρδιά του σπιτιού: ένα σκεπαστό daybed, τραπεζαρία για έξι, και το είδος του ηλιοβασιλέματος που σταματάει τη συζήτηση.",
      features: {
        bedrooms: "Υπνοδωμάτια",
        bedroomsDesc: "King + δίδυμα κρεβάτια",
        bathrooms: "Μπάνια",
        bathroomsDesc: "Ένα en-suite",
        guests: "Φιλοξενούμενοι",
        guestsDesc: "Ιδανικό για 2-4"
      }
    },

    // Gallery
    gallery: {
      label: "Γκαλερί",
      title: "Ο Χώρος",
      subtitle: "Φυσικό φως. Πέτρινα πατώματα. Βαμβακερά σεντόνια. Χώρος να αναπνεύσετε.",
      viewAll: "Δείτε όλες τις φωτογραφίες"
    },

    // Amenities
    amenities: {
      label: "Παροχές",
      title: "Τι Προσφέρουμε",
      subtitle: "Απλά, ποιοτικά απαραίτητα για τη διαμονή σας",
      items: {
        wifi: { title: "Internet Starlink", desc: "Αξιόπιστη σύνδεση υψηλής ταχύτητας" },
        ac: { title: "Κλιματισμός", desc: "Σε κάθε δωμάτιο" },
        kitchen: { title: "Πλήρης Κουζίνα", desc: "Μαγειρέψτε με τοπικά υλικά" },
        parking: { title: "Δωρεάν Δημόσιο Πάρκινγκ", desc: "Στάθμευση στο δρόμο διαθέσιμη" },
        terrace: { title: "Μεγάλο Μπαλκόνι", desc: "Θέα νοτιοανατολικά, πρωινό φως" },
        washer: { title: "Πλυντήριο", desc: "Για μεγαλύτερες διαμονές" },
        linens: { title: "Σεντόνια 100% Βαμβάκι", desc: "Καθαρές πετσέτες & κλινοσκεπάσματα" },
        beach: { title: "Πετσέτες Θαλάσσης", desc: "Παρέχονται για τις μέρες στην παραλία" }
      }
    },

    // Services (on request)
    services: {
      label: "Κατόπιν Αιτήματος",
      title: "Προσθέστε στη Διαμονή σας",
      subtitle: "Αυθεντικές εμπειρίες Πάρου, οργανωμένες για τις ημερομηνίες σας",
      items: {
        cookingClass: { title: "Μαθήματα Μαγειρικής", desc: "Πρακτικά μαθήματα ελληνικής κουζίνας με τοπικό σεφ" },
        privateChef: { title: "Ιδιωτικός Σεφ", desc: "Πρωινό, μεσημεριανό ή δείπνο στο σπίτι" },
        yoga: { title: "Μαθήματα Yoga", desc: "Πρωινά μαθήματα στη βεράντα με πιστοποιημένο εκπαιδευτή" },
        bikeRental: { title: "Ενοικίαση Ποδηλάτων", desc: "Εξερευνήστε το νησί με τον δικό σας ρυθμό" },
        diving: { title: "Καταδύσεις", desc: "Καθοδηγούμενες καταδύσεις σε κρυστάλλινα νερά του Αιγαίου" },
        walkingTours: { title: "Περιπατητικές Διαδρομές", desc: "Ανακαλύψτε κρυμμένα χωριά και αρχαία μονοπάτια" }
      }
    },

    // Practical Info (check-in, house rules)
    practical: {
      label: "Καλό να Γνωρίζετε",
      title: "Πριν την Άφιξή σας",
      checkin: { label: "Check-in", value: "3:00 μ.μ. – 6:00 μ.μ." },
      checkout: { label: "Check-out", value: "Έως τις 11:00 π.μ." },
      family: { title: "Φιλικό για Οικογένειες" },
      rules: [
        "Δεν επιτρέπεται το κάπνισμα στους εσωτερικούς χώρους",
        "Δεν επιτρέπονται κατοικίδια",
        "Δεν επιτρέπονται πάρτι ή εκδηλώσεις",
        "Ώρες κοινής ησυχίας: 3:00 – 5:00 μ.μ.",
        "Παιδιά όλων των ηλικιών είναι ευπρόσδεκτα — παρέχονται βρεφικές κούνιες δωρεάν"
      ]
    },

    // The Space (selling points)
    theSpace: {
      label: "Ο Χώρος",
      title: "Χώρος να Αναπνεύσετε",
      subtitle: "Ένας χώρος σχεδιασμένος για ξεκούραση και αργά πρωινά",
      items: {
        bathrooms: { title: "2 Μπάνια", desc: "Ένα en-suite, ένα κοινόχρηστο" },
        yoga: { title: "Δωμάτιο Yoga", desc: "Αφιερωμένος χώρος για άσκηση" },
        balcony: { title: "Μεγάλο Μπαλκόνι", desc: "Νοτιοανατολικός προσανατολισμός, πρωινός ήλιος" }
      }
    },

    // Waterfront Section
    waterfront: {
      label: "Η Παραλία",
      title: "Λίγα Βήματα από τη Θάλασσα",
      rockyTitle: "Μια Πιο Ήσυχη Ακτή",
      rockyDesc: "Κάτω από τη βεράντα, μια βραχώδης ακτή κρατάει αυτή τη γωνιά της Αλυκής ήρεμη. Κρυστάλλινα νερά για κολύμπι, snorkeling, ή απλά για να βλέπεις τα καΐκια.",
      sandyTitle: "Αμμουδιές Κοντά",
      sandyIntro: "Προτιμάς άμμο ανάμεσα στα δάχτυλα; Έχεις επιλογές:",
      sandy1: "Παραλία Αλυκής — 2 λεπτά πεζή",
      sandy2: "Πίσω Αλυκή — 5 λεπτά πεζή",
      sandy3: "Παραλία Φάραγγας — 10 λεπτά με αυτοκίνητο",
      note: "Καλό να ξέρεις: το μονοπάτι προς την ακτή μας είναι ανώμαλο. Συνιστώνται παπούτσια θαλάσσης."
    },

    // Life in Aliki
    aliki: {
      label: "Ζωή στην Αλυκή",
      title: "Ένα Χωριό που Κινείται Αργά",
      subtitle: "Παραδοσιακά ψαροκάικα. Τέσσερις οικογενειακές ταβέρνες. Ένας φούρνος. Χωρίς κόσμο.",
      eating: {
        title: "Πού να Φας",
        desc: "Τέσσερις ταβέρνες, όλες σε κοντινή απόσταση. Φρέσκο ψάρι κάθε μέρα. Ιδιοκτήτες που θυμούνται το όνομά σου την τρίτη μέρα.",
        mouragio: "Τραπέζια στο νερό, οικογενειακή 30 χρόνια",
        thalassamou: "Στην παραλία, ψαροκάικα της ημέρας",
        aliki: "Ελληνικά κλασικά από το 1974",
        balcony: "Απλό, ειλικρινές, τοπικό"
      },
      daily: {
        title: "Καθημερινές Ανάγκες",
        bakery: "Φούρνος — 2 λεπτά πεζή",
        market: "Μίνι μάρκετ — 3 λεπτά πεζή",
        supermarket: "Σούπερ μάρκετ — 5 λεπτά πεζή",
        pharmacy: "Φαρμακείο — 10 λεπτά με αυτοκίνητο"
      },
      getting: {
        title: "Μετακινήσεις",
        airport: "Αεροδρόμιο — 5 λεπτά με αυτοκίνητο",
        port: "Λιμάνι Παροικιάς — 15 λεπτά με αυτοκίνητο",
        naousa: "Νάουσα — 25 λεπτά με αυτοκίνητο",
        car: "Συνιστάται αυτοκίνητο"
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Διαθεσιμότητα",
      title: "Σχεδιάστε τη Διαμονή σας",
      subtitle: "Ελέγξτε τη διαθεσιμότητά μας και κλείστε τις τέλειες ημερομηνίες",
      available: "Διαθέσιμο",
      booked: "Κρατημένο",
      months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος",
        "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
      days: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"]
    },

    // Host Section
    host: {
      label: "Ένα Σημείωμα από τον Αντώνη",
      quote: "Μεγάλωσα σε αυτό το σπίτι. Ο πατέρας μου είχε τη Romantica εδώ για είκοσι χρόνια. Όταν σταμάτησε η μουσική, αναρωτήθηκα τι θα μπορούσε να γίνει αυτός ο χώρος. Τώρα είναι ένα σπίτι για ανθρώπους που θέλουν να μείνουν λίγο — να δουλέψουν από απόσταση, να γράψουν, να ξεκουραστούν, να ηρεμήσουν. Αν ψάχνεις ένα μέρος να επιβραδύνεις, θα χαρώ να σε φιλοξενήσω.",
      role: "Ο οικοδεσπότης σου στην Αλυκή"
    },

    // Romantica Section
    romantica: {
      label: "Η Ανάμνηση",
      title: "Πριν Γίνει Sea Tree",
      p1: "Αυτό το μπλε σπίτι ήταν κάποτε η Romantica — για είκοσι χρόνια, το disco bar όπου ντόπιοι και ταξιδιώτες χόρευαν μέχρι την ανατολή. Ρώτα τους ντόπιους· ακόμα θυμούνται.",
      p2: "Η μουσική έχει φύγει. Αυτό που μένει είναι το κτίριο, η θέα στη θάλασσα που δεν έχει αλλάξει, και ένας πιο ήσυχος ρυθμός. Η ψυχή του τόπου ζει ακόμα — απλά διαφορετικά."
    },

    // Inquiry Section
    inquiry: {
      label: "Η Διαμονή Σου",
      title: "Πες μας για το Ταξίδι Σου",
      subtitle: "Καλωσορίζουμε μεγαλύτερες διαμονές. Πες μας τι έχεις στο μυαλό σου.",
      form: {
        name: "Το όνομά σου",
        email: "Email",
        dates: "Ημερομηνίες (κατά προσέγγιση)",
        guests: "Αριθμός φιλοξενούμενων",
        message: "Πες μας για τη διαμονή σου",
        submit: "Αποστολή Αιτήματος"
      },
      quick: {
        title: "Προτιμάς να Μιλήσεις;",
        desc: "Επικοινώνησε απευθείας. Ο Αντώνης συνήθως απαντά μέσα σε λίγες ώρες.",
        whatsapp: "WhatsApp στον Αντώνη"
      },
      platforms: {
        note: "Ξέρεις ήδη τις ημερομηνίες σου; Μπορείς επίσης να κλείσεις στο:"
      }
    },

    // Footer
    footer: {
      about: "Ένα σπίτι στην Αλυκή, Πάρος. Για μεγαλύτερες διαμονές, αργά πρωινά, και χρόνο που νιώθει ξανά δικός σου.",
      quickLinks: "Γρήγοροι Σύνδεσμοι",
      contactTitle: "Επικοινωνία",
      phone: "+30 697 3286 811",
      email: "info@seatree.gr",
      address: "Αλυκή, Πάρος 844 00, Ελλάδα",
      copyright: "© 2026 Sea Tree. Με επιφύλαξη παντός δικαιώματος.",
      privacyLink: "Πολιτική Απορρήτου"
    },

    // Cookie consent banner (GA4 Consent Mode v2)
    consent: {
      text: "Χρησιμοποιούμε cookies για να καταλάβουμε πώς χρησιμοποιείται ο ιστότοπος. Μόνο analytics — χωρίς διαφημιστικούς ιχνηλάτες.",
      accept: "Αποδοχή",
      decline: "Απόρριψη",
      learnMore: "Διαβάστε περισσότερα"
    }
  },

  fr: {
    // Meta
    meta: {
      title: "Sea Tree | Location de Vacances à Paros, Grèce",
      description: "Sea Tree — une location de vacances unique à la plage d'Aliki, Paros, Grèce. Le légendaire disco-bar Romantica, transformé en refuge insulaire serein.",
      ogTitle: "Sea Tree | Location de Vacances à Paros, Grèce",
      ogDescription: "De la piste de danse au rêve — Sea Tree, location de vacances unique à Aliki, Paros. Le légendaire disco-bar Romantica, devenu refuge paisible.",
      twitterTitle: "Sea Tree | Paros, Grèce",
      twitterDescription: "De la piste de danse au rêve — Sea Tree, location de vacances à Aliki, Paros."
    },

    // Accessibility
    a11y: {
      skipToMain: "Passer au contenu principal"
    },

    // Navigation
    nav: {
      rhythm: "Le Rythme",
      home: "La Maison",
      aliki: "Vie à Aliki",
      availability: "Disponibilité",
      inquiry: "Contact"
    },

    // Hero
    hero: {
      title: "Vivez lentement au bord de l'eau",
      tagline: "Une maison face à la mer à Aliki, Paros",
      subtitle: "Pour les longs séjours. Pour les matins qui s'étirent. Pour un temps qui vous appartient à nouveau.",
      inquire: "Parlez-nous de votre séjour",
      discover: "Découvrez le rythme"
    },

    // Rhythm Section
    rhythm: {
      label: "Le Rythme",
      title: "Une Journée à Sea Tree",
      subtitle: "Voici ce que c'est de séjourner ici.",
      morning: {
        time: "Matin",
        title: "Lumière à Travers les Rideaux",
        desc: "Réveillez-vous quand vous vous réveillez. Café sur le balcon, lumière marine sur les murs en kourasani. Les bateaux de pêche sont déjà partis. Pas de hâte."
      },
      midday: {
        time: "Midi",
        title: "Vie de Village",
        desc: "Marchez jusqu'à la boulangerie. Achetez des tomates au marché. Nagez à la plage de sable à deux minutes. Rentrez pour un déjeuner tardif."
      },
      afternoon: {
        time: "Après-midi",
        title: "Repos ou Travail",
        desc: "La maison est fraîche et calme. Starlink vous garde connecté. La salle de yoga est à vous. Ou lisez simplement à l'ombre."
      },
      evening: {
        time: "Soir",
        title: "Heure Dorée sur la Terrasse",
        desc: "Regardez la lumière changer sur la baie d'Aliki. Dîner à la taverne, ou cuisinez ce que vous avez trouvé au marché. La mer devient dorée, puis rose, puis sombre."
      }
    },

    // Home Section
    home: {
      label: "La Maison",
      title: "Espace pour S'étendre",
      p1: "100 mètres carrés d'espace lumineux. Deux chambres, deux salles de bain, une cuisine équipée et une salle de yoga avec vue sur la baie.",
      p2: "La terrasse est le cœur de la maison : un daybed couvert, une table pour six, et le genre de coucher de soleil qui arrête la conversation.",
      features: {
        bedrooms: "Chambres",
        bedroomsDesc: "King + lits jumeaux",
        bathrooms: "Salles de bain",
        bathroomsDesc: "Une en suite",
        guests: "Invités",
        guestsDesc: "Idéal pour 2-4"
      }
    },

    // Gallery
    gallery: {
      label: "Galerie",
      title: "L'Espace",
      subtitle: "Lumière naturelle. Sols en pierre. Draps en coton. Espace pour respirer.",
      viewAll: "Voir toutes les photos"
    },

    // Amenities
    amenities: {
      label: "Équipements",
      title: "Ce Que Nous Offrons",
      subtitle: "Essentiels simples et de qualité pour votre séjour",
      items: {
        wifi: { title: "Internet Starlink", desc: "Connexion fiable haut débit" },
        ac: { title: "Climatisation", desc: "Dans chaque pièce" },
        kitchen: { title: "Cuisine Équipée", desc: "Cuisinez avec des ingrédients locaux" },
        parking: { title: "Parking Public Gratuit", desc: "Stationnement dans la rue disponible" },
        terrace: { title: "Grand Balcon", desc: "Vue sud-est, lumière du matin" },
        washer: { title: "Machine à Laver", desc: "Pour les longs séjours" },
        linens: { title: "Draps 100% Coton", desc: "Serviettes & literie propres" },
        beach: { title: "Serviettes de Plage", desc: "Fournies pour vos journées à la plage" }
      }
    },

    // Services (on request)
    services: {
      label: "Sur Demande",
      title: "Complétez votre Séjour",
      subtitle: "Des expériences authentiques de Paros, arrangées pour vos dates",
      items: {
        cookingClass: { title: "Cours de Cuisine", desc: "Cuisine grecque pratique avec un chef local" },
        privateChef: { title: "Chef Privé", desc: "Petit-déjeuner, déjeuner ou dîner servis à domicile" },
        yoga: { title: "Séances de Yoga", desc: "Cours du matin sur la terrasse avec un instructeur certifié" },
        bikeRental: { title: "Location de Vélos", desc: "Explorez l'île à votre rythme" },
        diving: { title: "Plongée", desc: "Plongées guidées dans les eaux cristallines de l'Égée" },
        walkingTours: { title: "Balades Guidées", desc: "Découvrez des villages cachés et d'anciens sentiers" }
      }
    },

    // Practical Info (check-in, house rules)
    practical: {
      label: "Bon à Savoir",
      title: "Avant votre Arrivée",
      checkin: { label: "Arrivée", value: "3:00 PM – 6:00 PM" },
      checkout: { label: "Départ", value: "Jusqu'à 11:00 AM" },
      family: { title: "Adapté aux Familles" },
      rules: [
        "Non-fumeur à l'intérieur",
        "Animaux non admis",
        "Fêtes et événements non autorisés",
        "Heures calmes : 3:00 – 5:00 PM",
        "Enfants de tous âges bienvenus — lits bébé disponibles gratuitement"
      ]
    },

    // The Space (selling points)
    theSpace: {
      label: "L'Espace",
      title: "Espace pour Respirer",
      subtitle: "Un lieu conçu pour le repos et les matins lents",
      items: {
        bathrooms: { title: "2 Salles de Bain", desc: "Une en suite, une partagée" },
        yoga: { title: "Salle de Yoga", desc: "Espace dédié pour la pratique" },
        balcony: { title: "Grand Balcon", desc: "Orientation sud-est, soleil du matin" }
      }
    },

    // Waterfront Section
    waterfront: {
      label: "Le Bord de Mer",
      title: "À Quelques Pas de la Mer",
      rockyTitle: "Une Côte Plus Calme",
      rockyDesc: "Sous la terrasse, une côte rocheuse garde ce coin d'Aliki paisible. Eau cristalline pour nager, faire du snorkeling, ou simplement regarder les bateaux.",
      sandyTitle: "Plages de Sable à Proximité",
      sandyIntro: "Vous préférez le sable entre les orteils ? Vous avez des options :",
      sandy1: "Plage d'Aliki — 2 minutes à pied",
      sandy2: "Piso Aliki — 5 minutes à pied",
      sandy3: "Plage de Faragas — 10 minutes en voiture",
      note: "Bon à savoir : le chemin vers notre rivage est irrégulier. Chaussures aquatiques recommandées."
    },

    // Life in Aliki
    aliki: {
      label: "Vie à Aliki",
      title: "Un Village Qui Bouge Lentement",
      subtitle: "Bateaux de pêche traditionnels. Quatre tavernes familiales. Une boulangerie. Pas de foule.",
      eating: {
        title: "Où Manger",
        desc: "Quatre tavernes, toutes à distance de marche. Poisson frais tous les jours. Des propriétaires qui se souviennent de votre nom dès le troisième jour.",
        mouragio: "Tables face à la mer, familial depuis 30 ans",
        thalassamou: "En bord de plage, prise du jour grillée",
        aliki: "Classiques grecs depuis 1974",
        balcony: "Simple, honnête, local"
      },
      daily: {
        title: "Besoins Quotidiens",
        bakery: "Boulangerie — 2 min à pied",
        market: "Mini marché — 3 min à pied",
        supermarket: "Supermarché — 5 min à pied",
        pharmacy: "Pharmacie — 10 min en voiture"
      },
      getting: {
        title: "Se Déplacer",
        airport: "Aéroport — 5 min en voiture",
        port: "Port de Parikia — 15 min en voiture",
        naousa: "Naousa — 25 min en voiture",
        car: "Une voiture est recommandée"
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Disponibilité",
      title: "Planifiez Votre Séjour",
      subtitle: "Vérifiez notre disponibilité et réservez vos dates parfaites",
      available: "Disponible",
      booked: "Réservé",
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    },

    // Booking/Contact
    booking: {
      label: "Réservez Votre Séjour",
      title: "Prêt à Vivre l'Expérience Sea Tree ?",
      subtitle: "Parlez à l'hôte ou réservez directement sur votre plateforme préférée",
      directTitle: "Parlez à Antonis",
      directSub: "Pas de formulaires, pas d'attente — juste un contact direct avec l'hôte. Répond généralement en quelques heures.",
      whatsapp: "Message sur WhatsApp",
      whatsappSub: "Réponse la plus rapide, dans votre langue",
      callLabel: "Appeler",
      phone: "+30 697 3286 811",
      phoneSub: "Anglais, Grec",
      emailLabel: "Email",
      emailCTA: "Envoyer un email",
      platformsTitle: "Ou Réservez Directement",
      airbnb: "Réserver sur Airbnb",
      airbnbSub: "Confirmation immédiate",
      bookingcom: "Réserver sur Booking.com",
      bookingcomSub: "Options d'annulation gratuite"
    },

    // Footer
    footer: {
      about: "Une location de vacances unique à Paros, Grèce — où l'histoire disco rencontre la sérénité insulaire.",
      quickLinks: "Liens Rapides",
      contactTitle: "Contact",
      phone: "+30 697 3286 811",
      email: "info@seatree.gr",
      address: "Plage d'Aliki, Paros 844 00, Grèce",
      copyright: "© 2026 Sea Tree. Tous droits réservés.",
      privacyLink: "Politique de Confidentialité"
    },

    // Cookie consent banner (GA4 Consent Mode v2)
    consent: {
      text: "Nous utilisons des cookies pour comprendre l'utilisation de ce site. Analyses uniquement — pas de traceurs publicitaires.",
      accept: "Accepter",
      decline: "Refuser",
      learnMore: "En savoir plus"
    }
  }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
