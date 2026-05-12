// =====================================================
// SEA TREE — Translations
// All text content in 4 languages: EN, ES, GR, FR
// =====================================================

const translations = {
  en: {
    // Meta / head tags (used by the per-locale build step)
    meta: {
      title: "Sea Tree | Vacation Rental in Paros, Greece",
      description: "Sea Tree — a personal seaside home on the quiet side of Aliki, Paros, made for longer stays, village rhythm, quiet work, and year-round comfort.",
      ogTitle: "Sea Tree | Vacation Rental in Paros, Greece",
      ogDescription: "A personal seaside home on the quiet side of Aliki, Paros — directly by the water, two minutes from the sandy beach, made for longer stays.",
      twitterTitle: "Sea Tree | Paros, Greece",
      twitterDescription: "A personal seaside home on the quiet side of Aliki, Paros, made for longer stays."
    },

    // Accessibility
    a11y: {
      skipToMain: "Skip to main content"
    },

    // Navigation
    nav: {
      story: "Our Story",
      gallery: "Gallery",
      amenities: "Amenities",
      location: "Location",
      availability: "Availability",
      contact: "Contact"
    },

    // Hero
    hero: {
      title: "Sea Tree",
      tagline: "Live slowly by the water in Aliki, Paros.",
      copy: "Wake to the sound of the waves, watch the traditional boats across the bay, and walk two minutes to the sandy beach, tavernas, and village essentials.",
      location: "Aliki Beach, Paros, Greece",
      checkAvailability: "Check Availability",
      ourStory: "Our Story",
      longStayCta: "Tell us about your longer stay",
      exploreHome: "Explore the home"
    },

    // Rhythm
    rhythm: {
      label: "The Rhythm",
      title: "A place where the island sets the pace",
      subtitle: "At Sea Tree, Aliki becomes part of your day: a walk by the bay, boats in the evening light, the village close enough for everything you need, and quiet enough to let time stretch.",
      items: {
        morning: { title: "Morning by the water", desc: "Coffee, soft light, and the sound of small waves before the village fully wakes." },
        village: { title: "Village days", desc: "Bakery, supermarket, sandy beach, and waterfront tavernas within an easy walk." },
        work: { title: "Quiet work, real rest", desc: "Starlink internet, calm corners, sea light, and enough space to settle in." },
        evening: { title: "Evenings that slow down", desc: "Traditional boats across the bay, dinner on the terrace, and nowhere you need to rush." }
      }
    },

    // Longer stays
    longStay: {
      label: "Longer Stays",
      title: "Made for more than a few nights",
      p1: "Sea Tree is for guests who want enough time to learn the rhythm of Aliki: slow mornings, quiet workdays, village errands, swims nearby, and evenings by the water.",
      p2: "The house is made for every season, with a fireplace, a full kitchen, a washing machine, Starlink internet, and real-home comfort for stays that stretch beyond a short escape.",
      note: {
        title: "Good to know",
        text: "Rates are based on the season and requested dates rather than stay length. Longer stays are welcomed because the house is built for them, not because they are discounted."
      }
    },

    // Story Section
    story: {
      label: "Our Story",
      title: "Before it became a home, these walls held music",
      p1: "This blue house was once the Romantica disco bar — for two decades, part of Paros nightlife and local memory.",
      p2: "Today, the rhythm is quieter. Morning light, cool kourasani surfaces, coffee on the terrace, and the sound of the sea. The story remains, but the house now invites a slower kind of belonging.",
      highlight: {
        title: "A touch of history",
        text: "Ask locals about Romantica and they may smile. At Sea Tree, that memory sits softly in the background; the loudest sound now is the water."
      }
    },

    // Gallery
    gallery: {
      label: "Gallery",
      title: "The home, the light, the texture",
      subtitle: "Terrace, kourasani surfaces, quiet work corners, and everyday rooms made for settling in.",
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

    // Beach Access
    beach: {
      label: "Waterfront Truth",
      title: "Directly by the water, two minutes from the sandy beach",
      warningTitle: "Honest note",
      warning: "The shore directly in front of the house is rocky and not used for swimming. That is part of what keeps this side of Aliki especially quiet.",
      points: [
        "You hear the waves and see the boats without swimmers gathering in front of the house.",
        "The sandy swimming beach is about a two-minute walk away.",
        "Tavernas, supermarket, and village life are close without sitting on the busiest stretch."
      ],
      altTitle: "For swimming days",
      altIntro: "Choose the sandy side of Aliki or nearby beaches:",
      alt1: "Aliki Sandy Beach — 2 minute walk",
      alt2: "Piso Aliki Beach — 5 minute walk",
      alt3: "Agios Nikolaos — 10 minute drive"
    },

    // Location
    location: {
      label: "Life in Aliki",
      title: "Village life beside the sea",
      subtitle: "Aliki gives you the essentials of daily life at village pace: a bakery, supermarket, pharmacy, waterfront tavernas, and beaches you can walk to.",
      distances: {
        port: { label: "Parikia Port", value: "12 km (15 min)" },
        airport: { label: "Paros Airport", value: "2 km (5 min)" },
        village: { label: "Aliki Village", value: "2 min walk" },
        market: { label: "Supermarket", value: "5 min walk" },
        naousa: { label: "Naousa (nightlife)", value: "22 km (25 min)" }
      }
    },

    // Neighborhood
    neighborhood: {
      label: "Eat & Explore",
      title: "Your everyday Aliki",
      subtitle: "Fresh fish, simple errands, evening walks, and the kind of village scale that makes longer stays feel easy.",
      nightlife: "Prefer nightlife? Naousa is 25 minutes by car — the island's liveliest village.",
      tavernas: {
        mouragio: { name: "To Mouragio", desc: "Waterfront, fresh seafood, family-run for 30 years", distance: "2 min walk" },
        aliki: { name: "Aliki Restaurant", desc: "Greek classics, family recipes since 1974", distance: "3 min walk" },
        thalassamou: { name: "Thalassamou", desc: "Beachfront tables, grilled fish", distance: "4 min walk" },
        balcony: { name: "To Balcony tou Aki", desc: "Local fisherman's catch, simple and fresh", distance: "5 min walk" }
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Availability",
      title: "Check the general availability",
      subtitle: "Use the calendar as a starting point, then tell us what kind of longer stay you are imagining.",
      available: "Available",
      booked: "Booked",
      months: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },

    // Booking/Contact
    booking: {
      label: "Long-Stay Inquiry",
      title: "Tell us about the stay you are imagining",
      subtitle: "The best stays here start with fit: your dates, rhythm, guests, and what kind of time you want in Aliki.",
      formTitle: "Tell us about your longer stay",
      formSub: "Share the practical details and the kind of stay you have in mind. Antonis will reply personally.",
      hostTitle: "A note from Antonis",
      hostText: "Sea Tree is a home we want to share with people who understand its rhythm: the quiet edge of Aliki, the sound of the water, the winter fireplace, and the two-minute walk to village life.",
      directTitle: "Prefer to speak directly?",
      directSub: "Message Antonis on WhatsApp if you prefer a direct conversation.",
      fields: {
        name: "Name",
        email: "Email",
        dates: "Desired dates",
        duration: "Length of stay",
        guests: "Guests",
        remote: "Will you work remotely?",
        message: "What kind of stay are you imagining?"
      },
      placeholders: {
        dates: "e.g. 3-24 September",
        duration: "e.g. 3 weeks",
        guests: "e.g. 2 adults",
        message: "Quiet work weeks, family time, off-season rest, a returning summer base..."
      },
      remoteOptions: {
        unsure: "Not sure yet",
        yes: "Yes",
        no: "No"
      },
      submit: "Send inquiry",
      whatsapp: "Message on WhatsApp",
      whatsappSub: "Fastest reply, in your language",
      callLabel: "Call",
      phone: "+30 697 3286 811",
      phoneSub: "English, Greek",
      emailLabel: "Email",
      emailCTA: "Send an email",
      platformsTitle: "Prefer a platform booking?",
      airbnb: "Book on Airbnb",
      airbnbSub: "Instant confirmation",
      bookingcom: "Book on Booking.com",
      bookingcomSub: "Free cancellation options"
    },

    // Footer
    footer: {
      about: "A unique vacation rental in Paros, Greece — where disco history meets island serenity.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      phone: "+30 697 3286 811",
      email: "antocosto@gmail.com",
      address: "Aliki Beach, Paros 844 00, Greece",
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
      description: "Sea Tree — una casa personal junto al mar en el lado tranquilo de Aliki, Paros, hecha para estancias largas, ritmo de pueblo, trabajo tranquilo y confort todo el año.",
      ogTitle: "Sea Tree | Alquiler Vacacional en Paros, Grecia",
      ogDescription: "Una casa personal junto al mar en el lado tranquilo de Aliki, Paros — directamente junto al agua, a dos minutos de la playa de arena, hecha para estancias largas.",
      twitterTitle: "Sea Tree | Paros, Grecia",
      twitterDescription: "Una casa personal junto al mar en el lado tranquilo de Aliki, Paros, hecha para estancias largas."
    },

    // Accessibility
    a11y: {
      skipToMain: "Saltar al contenido principal"
    },

    // Navigation
    nav: {
      story: "Nuestra Historia",
      gallery: "Galería",
      amenities: "Servicios",
      location: "Ubicación",
      availability: "Disponibilidad",
      contact: "Contacto"
    },

    // Hero
    hero: {
      title: "Sea Tree",
      tagline: "Vive despacio junto al agua en Aliki, Paros.",
      copy: "Despierta con el sonido de las olas, mira las barcas tradicionales en la bahía y camina dos minutos hasta la playa de arena, las tabernas y lo esencial del pueblo.",
      location: "Playa de Aliki, Paros, Grecia",
      checkAvailability: "Ver Disponibilidad",
      ourStory: "Nuestra Historia",
      longStayCta: "Cuéntanos sobre tu estancia larga",
      exploreHome: "Explorar la casa"
    },

    rhythm: {
      label: "El Ritmo",
      title: "Un lugar donde la isla marca el paso",
      subtitle: "En Sea Tree, Aliki se vuelve parte de tu día: un paseo por la bahía, barcas con la luz de la tarde, el pueblo cerca para todo lo necesario y la calma suficiente para que el tiempo se estire.",
      items: {
        morning: { title: "Mañana junto al agua", desc: "Café, luz suave y el sonido de pequeñas olas antes de que el pueblo despierte del todo." },
        village: { title: "Días de pueblo", desc: "Panadería, supermercado, playa de arena y tabernas frente al mar a un paseo cómodo." },
        work: { title: "Trabajo tranquilo, descanso real", desc: "Internet Starlink, rincones serenos, luz del mar y espacio suficiente para instalarte." },
        evening: { title: "Tardes que se ralentizan", desc: "Barcas tradicionales en la bahía, cena en la terraza y ningún lugar al que correr." }
      }
    },

    longStay: {
      label: "Estancias Largas",
      title: "Hecha para más que unas pocas noches",
      p1: "Sea Tree es para huéspedes que quieren tiempo para aprender el ritmo de Aliki: mañanas lentas, días tranquilos de trabajo, recados de pueblo, baños cerca y tardes junto al agua.",
      p2: "La casa está hecha para todas las estaciones, con chimenea, cocina completa, lavadora, internet Starlink y comodidad de hogar real para estancias que van más allá de una escapada corta.",
      note: {
        title: "Bueno saber",
        text: "Las tarifas se basan en la temporada y las fechas solicitadas, no en la duración de la estancia. Las estancias largas son bienvenidas porque la casa está hecha para ellas, no porque tengan descuento."
      }
    },

    // Story Section
    story: {
      label: "Nuestra Historia",
      title: "Antes de ser una casa, estas paredes tuvieron música",
      p1: "Esta casa azul fue una vez el disco bar Romantica — durante dos décadas, parte de la vida nocturna de Paros y de la memoria local.",
      p2: "Hoy, el ritmo es más tranquilo. Luz de mañana, superficies frescas de kourasani, café en la terraza y el sonido del mar. La historia sigue ahí, pero la casa invita ahora a una forma más lenta de pertenecer.",
      highlight: {
        title: "Un toque de historia",
        text: "Pregunta a la gente local por Romantica y quizá sonría. En Sea Tree, esa memoria queda suavemente al fondo; ahora el sonido más fuerte es el agua."
      }
    },

    // Gallery
    gallery: {
      label: "Galería",
      title: "La casa, la luz, la textura",
      subtitle: "Terraza, superficies de kourasani, rincones tranquilos para trabajar y habitaciones cotidianas hechas para instalarse.",
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

    // Beach Access
    beach: {
      label: "Verdad Frente al Agua",
      title: "Directamente junto al agua, a dos minutos de la playa de arena",
      warningTitle: "Nota honesta",
      warning: "La orilla justo delante de la casa es rocosa y no se usa para nadar. Eso es parte de lo que mantiene este lado de Aliki especialmente tranquilo.",
      points: [
        "Escuchas las olas y ves las barcas sin gente bañándose justo delante de la casa.",
        "La playa de arena para nadar está a unos dos minutos a pie.",
        "Tabernas, supermercado y vida de pueblo están cerca sin estar en el tramo más concurrido."
      ],
      altTitle: "Para días de baño",
      altIntro: "Elige el lado arenoso de Aliki o playas cercanas:",
      alt1: "Playa de arena de Aliki — 2 minutos a pie",
      alt2: "Playa Piso Aliki — 5 minutos a pie",
      alt3: "Agios Nikolaos — 10 minutos en coche"
    },

    // Location
    location: {
      label: "Vida en Aliki",
      title: "Vida de pueblo junto al mar",
      subtitle: "Aliki ofrece lo esencial de la vida diaria a ritmo de pueblo: panadería, supermercado, farmacia, tabernas frente al mar y playas a las que puedes caminar.",
      distances: {
        port: { label: "Puerto de Parikia", value: "12 km (15 min)" },
        airport: { label: "Aeropuerto de Paros", value: "2 km (5 min)" },
        village: { label: "Pueblo de Aliki", value: "2 min a pie" },
        market: { label: "Supermercado", value: "5 min a pie" },
        naousa: { label: "Naousa (vida nocturna)", value: "22 km (25 min)" }
      }
    },

    // Neighborhood
    neighborhood: {
      label: "Comer y Explorar",
      title: "Tu Aliki cotidiana",
      subtitle: "Pescado fresco, recados sencillos, paseos al atardecer y una escala de pueblo que hace fáciles las estancias largas.",
      nightlife: "¿Prefieres vida nocturna? Naousa está a 25 minutos en coche — el pueblo más animado de la isla.",
      tavernas: {
        mouragio: { name: "To Mouragio", desc: "Frente al mar, mariscos frescos, familiar por 30 años", distance: "2 min a pie" },
        aliki: { name: "Aliki Restaurant", desc: "Clásicos griegos, recetas familiares desde 1974", distance: "3 min a pie" },
        thalassamou: { name: "Thalassamou", desc: "Mesas frente a la playa, pescado a la parrilla", distance: "4 min a pie" },
        balcony: { name: "To Balcony tou Aki", desc: "Pescado del día, simple y fresco", distance: "5 min a pie" }
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Disponibilidad",
      title: "Consulta la disponibilidad general",
      subtitle: "Usa el calendario como punto de partida y luego cuéntanos qué tipo de estancia larga imaginas.",
      available: "Disponible",
      booked: "Reservado",
      months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    },

    // Booking/Contact
    booking: {
      label: "Consulta de Estancia Larga",
      title: "Cuéntanos la estancia que imaginas",
      subtitle: "Las mejores estancias aquí empiezan con encaje: tus fechas, ritmo, huéspedes y el tipo de tiempo que quieres vivir en Aliki.",
      formTitle: "Cuéntanos sobre tu estancia larga",
      formSub: "Comparte los detalles prácticos y el tipo de estancia que tienes en mente. Antonis responderá personalmente.",
      hostTitle: "Una nota de Antonis",
      hostText: "Sea Tree es una casa que queremos compartir con personas que entienden su ritmo: el borde tranquilo de Aliki, el sonido del agua, la chimenea de invierno y el paseo de dos minutos hacia la vida del pueblo.",
      directTitle: "¿Prefieres hablar directamente?",
      directSub: "Escribe a Antonis por WhatsApp si prefieres una conversación directa.",
      fields: {
        name: "Nombre",
        email: "Email",
        dates: "Fechas deseadas",
        duration: "Duración de la estancia",
        guests: "Huéspedes",
        remote: "¿Vas a trabajar en remoto?",
        message: "¿Qué tipo de estancia imaginas?"
      },
      placeholders: {
        dates: "ej. 3-24 septiembre",
        duration: "ej. 3 semanas",
        guests: "ej. 2 adultos",
        message: "Semanas de trabajo tranquilo, tiempo en familia, descanso fuera de temporada, una base de verano para volver..."
      },
      remoteOptions: {
        unsure: "Todavía no lo sé",
        yes: "Sí",
        no: "No"
      },
      submit: "Enviar consulta",
      whatsapp: "Mensaje por WhatsApp",
      whatsappSub: "Respuesta más rápida, en tu idioma",
      callLabel: "Llamar",
      phone: "+30 697 3286 811",
      phoneSub: "Inglés, Griego",
      emailLabel: "Email",
      emailCTA: "Enviar un email",
      platformsTitle: "¿Prefieres reservar en una plataforma?",
      airbnb: "Reservar en Airbnb",
      airbnbSub: "Confirmación inmediata",
      bookingcom: "Reservar en Booking.com",
      bookingcomSub: "Opciones de cancelación gratuita"
    },

    // Footer
    footer: {
      about: "Un alquiler vacacional único en Paros, Grecia — donde la historia disco se encuentra con la serenidad isleña.",
      quickLinks: "Enlaces Rápidos",
      contactTitle: "Contacto",
      phone: "+30 697 3286 811",
      email: "antocosto@gmail.com",
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
      description: "Sea Tree — ένα προσωπικό παραθαλάσσιο σπίτι στην ήσυχη πλευρά της Αλυκής, Πάρος, φτιαγμένο για μεγαλύτερες διαμονές, ρυθμό χωριού, ήσυχη δουλειά και άνεση όλο τον χρόνο.",
      ogTitle: "Sea Tree | Εξοχική Κατοικία στην Πάρο, Ελλάδα",
      ogDescription: "Ένα προσωπικό παραθαλάσσιο σπίτι στην ήσυχη πλευρά της Αλυκής, Πάρος — ακριβώς δίπλα στο νερό, δύο λεπτά από την αμμώδη παραλία, φτιαγμένο για μεγαλύτερες διαμονές.",
      twitterTitle: "Sea Tree | Πάρος, Ελλάδα",
      twitterDescription: "Ένα προσωπικό παραθαλάσσιο σπίτι στην ήσυχη πλευρά της Αλυκής, Πάρος, φτιαγμένο για μεγαλύτερες διαμονές."
    },

    // Accessibility
    a11y: {
      skipToMain: "Μετάβαση στο κύριο περιεχόμενο"
    },

    // Navigation
    nav: {
      story: "Η Ιστορία μας",
      gallery: "Γκαλερί",
      amenities: "Παροχές",
      location: "Τοποθεσία",
      availability: "Διαθεσιμότητα",
      contact: "Επικοινωνία"
    },

    // Hero
    hero: {
      title: "Sea Tree",
      tagline: "Ζήστε αργά δίπλα στο νερό, στην Αλυκή της Πάρου.",
      copy: "Ξυπνήστε με τον ήχο των κυμάτων, δείτε τις παραδοσιακές βάρκες στον κόλπο και περπατήστε δύο λεπτά μέχρι την αμμώδη παραλία, τις ταβέρνες και τα βασικά του χωριού.",
      location: "Αλυκή, Πάρος, Ελλάδα",
      checkAvailability: "Έλεγχος Διαθεσιμότητας",
      ourStory: "Η Ιστορία μας",
      longStayCta: "Πείτε μας για τη μεγαλύτερη διαμονή σας",
      exploreHome: "Δείτε το σπίτι"
    },

    rhythm: {
      label: "Ο Ρυθμός",
      title: "Ένα μέρος όπου το νησί δίνει τον ρυθμό",
      subtitle: "Στο Sea Tree, η Αλυκή γίνεται μέρος της ημέρας σας: μια βόλτα στον κόλπο, βάρκες στο απογευματινό φως, το χωριό αρκετά κοντά για ό,τι χρειάζεστε και αρκετά ήσυχο για να απλωθεί ο χρόνος.",
      items: {
        morning: { title: "Πρωινό δίπλα στο νερό", desc: "Καφές, απαλό φως και ο ήχος μικρών κυμάτων πριν ξυπνήσει εντελώς το χωριό." },
        village: { title: "Μέρες στο χωριό", desc: "Φούρνος, σούπερ μάρκετ, αμμώδης παραλία και ταβέρνες στο νερό σε άνετο περπάτημα." },
        work: { title: "Ήσυχη δουλειά, αληθινή ξεκούραση", desc: "Internet Starlink, ήσυχες γωνιές, φως από τη θάλασσα και χώρος για να εγκατασταθείτε." },
        evening: { title: "Βραδιές που επιβραδύνουν", desc: "Παραδοσιακές βάρκες στον κόλπο, φαγητό στη βεράντα και κανένας λόγος να βιαστείτε." }
      }
    },

    longStay: {
      label: "Μεγαλύτερες Διαμονές",
      title: "Φτιαγμένο για παραπάνω από λίγες νύχτες",
      p1: "Το Sea Tree είναι για επισκέπτες που θέλουν χρόνο να μάθουν τον ρυθμό της Αλυκής: αργά πρωινά, ήσυχες μέρες δουλειάς, καθημερινές βόλτες στο χωριό, μπάνιο κοντά και βραδιές δίπλα στο νερό.",
      p2: "Το σπίτι είναι φτιαγμένο για όλες τις εποχές, με τζάκι, πλήρη κουζίνα, πλυντήριο, internet Starlink και άνεση αληθινού σπιτιού για διαμονές πέρα από μια σύντομη απόδραση.",
      note: {
        title: "Καλό να γνωρίζετε",
        text: "Οι τιμές βασίζονται στην εποχή και στις ζητούμενες ημερομηνίες, όχι στη διάρκεια της διαμονής. Οι μεγαλύτερες διαμονές είναι ευπρόσδεκτες επειδή το σπίτι είναι φτιαγμένο για αυτές, όχι επειδή έχουν έκπτωση."
      }
    },

    // Story Section
    story: {
      label: "Η Ιστορία μας",
      title: "Πριν γίνει σπίτι, αυτοί οι τοίχοι είχαν μουσική",
      p1: "Αυτό το μπλε σπίτι ήταν κάποτε το disco bar Romantica — για δύο δεκαετίες, μέρος της νυχτερινής ζωής της Πάρου και της τοπικής μνήμης.",
      p2: "Σήμερα, ο ρυθμός είναι πιο ήσυχος. Πρωινό φως, δροσερές επιφάνειες από κουρασάνι, καφές στη βεράντα και ο ήχος της θάλασσας. Η ιστορία μένει, αλλά το σπίτι προσκαλεί τώρα έναν πιο αργό τρόπο να ανήκεις.",
      highlight: {
        title: "Μια πινελιά ιστορίας",
        text: "Ρωτήστε τους ντόπιους για τη Romantica και ίσως χαμογελάσουν. Στο Sea Tree, αυτή η μνήμη μένει διακριτικά στο φόντο· τώρα ο πιο δυνατός ήχος είναι το νερό."
      }
    },

    // Gallery
    gallery: {
      label: "Γκαλερί",
      title: "Το σπίτι, το φως, η υφή",
      subtitle: "Βεράντα, επιφάνειες από κουρασάνι, ήσυχες γωνιές δουλειάς και καθημερινοί χώροι φτιαγμένοι για να εγκατασταθείτε.",
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

    // Beach Access
    beach: {
      label: "Η αλήθεια για το νερό",
      title: "Ακριβώς δίπλα στο νερό, δύο λεπτά από την αμμώδη παραλία",
      warningTitle: "Ειλικρινής σημείωση",
      warning: "Η ακτή ακριβώς μπροστά από το σπίτι είναι βραχώδης και δεν χρησιμοποιείται για μπάνιο. Αυτό είναι μέρος του λόγου που αυτή η πλευρά της Αλυκής μένει ιδιαίτερα ήσυχη.",
      points: [
        "Ακούτε τα κύματα και βλέπετε τις βάρκες χωρίς να μαζεύονται λουόμενοι μπροστά στο σπίτι.",
        "Η αμμώδης παραλία για μπάνιο είναι περίπου δύο λεπτά με τα πόδια.",
        "Ταβέρνες, σούπερ μάρκετ και ζωή χωριού είναι κοντά χωρίς να βρίσκεστε στο πιο πολυσύχναστο σημείο."
      ],
      altTitle: "Για μέρες μπάνιου",
      altIntro: "Διαλέξτε την αμμώδη πλευρά της Αλυκής ή κοντινές παραλίες:",
      alt1: "Αμμώδης Παραλία Αλυκής — 2 λεπτά με τα πόδια",
      alt2: "Παραλία Πίσω Αλυκή — 5 λεπτά με τα πόδια",
      alt3: "Άγιος Νικόλαος — 10 λεπτά με αυτοκίνητο"
    },

    // Location
    location: {
      label: "Ζωή στην Αλυκή",
      title: "Ζωή χωριού δίπλα στη θάλασσα",
      subtitle: "Η Αλυκή προσφέρει τα βασικά της καθημερινότητας σε ρυθμό χωριού: φούρνο, σούπερ μάρκετ, φαρμακείο, ταβέρνες στο νερό και παραλίες όπου μπορείτε να πάτε με τα πόδια.",
      distances: {
        port: { label: "Λιμάνι Παροικιάς", value: "12 χλμ (15 λεπτά)" },
        airport: { label: "Αεροδρόμιο Πάρου", value: "2 χλμ (5 λεπτά)" },
        village: { label: "Χωριό Αλυκής", value: "2 λεπτά πεζή" },
        market: { label: "Σούπερ Μάρκετ", value: "5 λεπτά πεζή" },
        naousa: { label: "Νάουσα (νυχτερινή ζωή)", value: "22 χλμ (25 λεπτά)" }
      }
    },

    // Neighborhood
    neighborhood: {
      label: "Φαγητό & Εξερεύνηση",
      title: "Η καθημερινή σας Αλυκή",
      subtitle: "Φρέσκο ψάρι, απλές καθημερινές δουλειές, απογευματινές βόλτες και η κλίμακα χωριού που κάνει τις μεγαλύτερες διαμονές εύκολες.",
      nightlife: "Προτιμάτε νυχτερινή ζωή; Η Νάουσα είναι 25 λεπτά με αυτοκίνητο — το πιο ζωντανό χωριό του νησιού.",
      tavernas: {
        mouragio: { name: "To Mouragio", desc: "Στην παραλία, φρέσκα θαλασσινά, οικογενειακή για 30 χρόνια", distance: "2 λεπτά πεζή" },
        aliki: { name: "Aliki Restaurant", desc: "Ελληνικά κλασικά, οικογενειακές συνταγές από το 1974", distance: "3 λεπτά πεζή" },
        thalassamou: { name: "Thalassamou", desc: "Τραπέζια στην παραλία, ψητό ψάρι", distance: "4 λεπτά πεζή" },
        balcony: { name: "To Balcony tou Aki", desc: "Ψάρι ντόπιου ψαρά, απλό και φρέσκο", distance: "5 λεπτά πεζή" }
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Διαθεσιμότητα",
      title: "Ελέγξτε τη γενική διαθεσιμότητα",
      subtitle: "Χρησιμοποιήστε το ημερολόγιο ως αφετηρία και μετά πείτε μας τι είδους μεγαλύτερη διαμονή φαντάζεστε.",
      available: "Διαθέσιμο",
      booked: "Κρατημένο",
      months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος",
        "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
      days: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"]
    },

    // Booking/Contact
    booking: {
      label: "Ερώτημα Μεγαλύτερης Διαμονής",
      title: "Πείτε μας τη διαμονή που φαντάζεστε",
      subtitle: "Οι καλύτερες διαμονές εδώ ξεκινούν από το ταίριασμα: οι ημερομηνίες σας, ο ρυθμός σας, οι επισκέπτες και ο χρόνος που θέλετε να ζήσετε στην Αλυκή.",
      formTitle: "Πείτε μας για τη μεγαλύτερη διαμονή σας",
      formSub: "Μοιραστείτε τις πρακτικές λεπτομέρειες και το είδος της διαμονής που έχετε στο μυαλό σας. Ο Αντώνης θα απαντήσει προσωπικά.",
      hostTitle: "Ένα σημείωμα από τον Αντώνη",
      hostText: "Το Sea Tree είναι ένα σπίτι που θέλουμε να μοιραστούμε με ανθρώπους που καταλαβαίνουν τον ρυθμό του: την ήσυχη άκρη της Αλυκής, τον ήχο του νερού, το χειμωνιάτικο τζάκι και τα δύο λεπτά περπάτημα μέχρι τη ζωή του χωριού.",
      directTitle: "Προτιμάτε να μιλήσετε απευθείας;",
      directSub: "Στείλτε μήνυμα στον Αντώνη στο WhatsApp αν προτιμάτε άμεση επικοινωνία.",
      fields: {
        name: "Όνομα",
        email: "Email",
        dates: "Επιθυμητές ημερομηνίες",
        duration: "Διάρκεια διαμονής",
        guests: "Επισκέπτες",
        remote: "Θα δουλεύετε εξ αποστάσεως;",
        message: "Τι είδους διαμονή φαντάζεστε;"
      },
      placeholders: {
        dates: "π.χ. 3-24 Σεπτεμβρίου",
        duration: "π.χ. 3 εβδομάδες",
        guests: "π.χ. 2 ενήλικες",
        message: "Ήσυχες εβδομάδες δουλειάς, οικογενειακός χρόνος, ξεκούραση εκτός σεζόν, μια βάση για να επιστρέφετε κάθε καλοκαίρι..."
      },
      remoteOptions: {
        unsure: "Δεν είμαι σίγουρος/η ακόμα",
        yes: "Ναι",
        no: "Όχι"
      },
      submit: "Αποστολή ερωτήματος",
      whatsapp: "Μήνυμα στο WhatsApp",
      whatsappSub: "Γρηγορότερη απάντηση, στη γλώσσα σας",
      callLabel: "Κλήση",
      phone: "+30 697 3286 811",
      phoneSub: "Αγγλικά, Ελληνικά",
      emailLabel: "Email",
      emailCTA: "Αποστολή email",
      platformsTitle: "Προτιμάτε κράτηση μέσω πλατφόρμας;",
      airbnb: "Κράτηση στο Airbnb",
      airbnbSub: "Άμεση επιβεβαίωση",
      bookingcom: "Κράτηση στο Booking.com",
      bookingcomSub: "Επιλογές δωρεάν ακύρωσης"
    },

    // Footer
    footer: {
      about: "Μοναδικό ενοικιαζόμενο κατάλυμα στην Πάρο, Ελλάδα — όπου η disco ιστορία συναντά τη νησιώτικη γαλήνη.",
      quickLinks: "Γρήγοροι Σύνδεσμοι",
      contactTitle: "Επικοινωνία",
      phone: "+30 697 3286 811",
      email: "antocosto@gmail.com",
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
      description: "Sea Tree — une maison personnelle au bord de la mer, du côté calme d'Aliki, Paros, pensée pour les longs séjours, le rythme du village, le travail tranquille et le confort toute l'année.",
      ogTitle: "Sea Tree | Location de Vacances à Paros, Grèce",
      ogDescription: "Une maison personnelle au bord de la mer, du côté calme d'Aliki, Paros — directement au bord de l'eau, à deux minutes de la plage de sable, pensée pour les longs séjours.",
      twitterTitle: "Sea Tree | Paros, Grèce",
      twitterDescription: "Une maison personnelle au bord de la mer, du côté calme d'Aliki, Paros, pensée pour les longs séjours."
    },

    // Accessibility
    a11y: {
      skipToMain: "Passer au contenu principal"
    },

    // Navigation
    nav: {
      story: "Notre Histoire",
      gallery: "Galerie",
      amenities: "Équipements",
      location: "Emplacement",
      availability: "Disponibilité",
      contact: "Contact"
    },

    // Hero
    hero: {
      title: "Sea Tree",
      tagline: "Vivez lentement au bord de l'eau à Aliki, Paros.",
      copy: "Réveillez-vous au son des vagues, regardez les bateaux traditionnels dans la baie et marchez deux minutes jusqu'à la plage de sable, les tavernes et les essentiels du village.",
      location: "Plage d'Aliki, Paros, Grèce",
      checkAvailability: "Vérifier Disponibilité",
      ourStory: "Notre Histoire",
      longStayCta: "Parlez-nous de votre long séjour",
      exploreHome: "Explorer la maison"
    },

    rhythm: {
      label: "Le Rythme",
      title: "Un lieu où l'île donne le tempo",
      subtitle: "À Sea Tree, Aliki devient partie de votre journée : une promenade dans la baie, les bateaux dans la lumière du soir, le village assez proche pour tout ce dont vous avez besoin, et assez calme pour laisser le temps s'étirer.",
      items: {
        morning: { title: "Matin au bord de l'eau", desc: "Café, lumière douce et le bruit des petites vagues avant que le village ne se réveille complètement." },
        village: { title: "Journées de village", desc: "Boulangerie, supermarché, plage de sable et tavernes au bord de l'eau à quelques pas." },
        work: { title: "Travail calme, vrai repos", desc: "Internet Starlink, coins paisibles, lumière de mer et assez d'espace pour s'installer." },
        evening: { title: "Soirs qui ralentissent", desc: "Bateaux traditionnels dans la baie, dîner sur la terrasse et nulle part où se presser." }
      }
    },

    longStay: {
      label: "Longs Séjours",
      title: "Pensée pour plus que quelques nuits",
      p1: "Sea Tree est pour les hôtes qui veulent assez de temps pour apprendre le rythme d'Aliki : matins lents, journées de travail calmes, petites courses au village, baignades proches et soirées au bord de l'eau.",
      p2: "La maison est faite pour toutes les saisons, avec une cheminée, une cuisine complète, un lave-linge, internet Starlink et le confort d'une vraie maison pour les séjours qui dépassent une courte escapade.",
      note: {
        title: "Bon à savoir",
        text: "Les tarifs dépendent de la saison et des dates demandées plutôt que de la durée du séjour. Les longs séjours sont bienvenus parce que la maison est faite pour eux, pas parce qu'ils sont remisés."
      }
    },

    // Story Section
    story: {
      label: "Notre Histoire",
      title: "Avant de devenir une maison, ces murs avaient de la musique",
      p1: "Cette maison bleue était autrefois le disco-bar Romantica — pendant deux décennies, une partie de la vie nocturne de Paros et de la mémoire locale.",
      p2: "Aujourd'hui, le rythme est plus calme. Lumière du matin, surfaces fraîches en kourasani, café sur la terrasse et le son de la mer. L'histoire reste, mais la maison invite maintenant à une forme plus lente d'appartenance.",
      highlight: {
        title: "Une touche d'histoire",
        text: "Demandez aux locaux à propos de Romantica et ils souriront peut-être. À Sea Tree, ce souvenir reste doucement en arrière-plan ; le bruit le plus fort est maintenant celui de l'eau."
      }
    },

    // Gallery
    gallery: {
      label: "Galerie",
      title: "La maison, la lumière, la texture",
      subtitle: "Terrasse, surfaces en kourasani, coins calmes pour travailler et pièces quotidiennes faites pour s'installer.",
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

    // Beach Access
    beach: {
      label: "Vérité du Front de Mer",
      title: "Directement au bord de l'eau, à deux minutes de la plage de sable",
      warningTitle: "Note honnête",
      warning: "Le rivage juste devant la maison est rocheux et n'est pas utilisé pour la baignade. C'est aussi ce qui garde ce côté d'Aliki particulièrement calme.",
      points: [
        "Vous entendez les vagues et voyez les bateaux sans baigneurs rassemblés devant la maison.",
        "La plage de sable pour nager est à environ deux minutes à pied.",
        "Tavernes, supermarché et vie de village sont proches sans être sur la partie la plus fréquentée."
      ],
      altTitle: "Pour les jours de baignade",
      altIntro: "Choisissez le côté sableux d'Aliki ou les plages voisines :",
      alt1: "Plage de sable d'Aliki — 2 minutes à pied",
      alt2: "Plage Piso Aliki — 5 minutes à pied",
      alt3: "Agios Nikolaos — 10 minutes en voiture"
    },

    // Location
    location: {
      label: "La vie à Aliki",
      title: "La vie de village au bord de la mer",
      subtitle: "Aliki offre les essentiels du quotidien au rythme du village : boulangerie, supermarché, pharmacie, tavernes au bord de l'eau et plages accessibles à pied.",
      distances: {
        port: { label: "Port de Parikia", value: "12 km (15 min)" },
        airport: { label: "Aéroport de Paros", value: "2 km (5 min)" },
        village: { label: "Village d'Aliki", value: "2 min à pied" },
        market: { label: "Supermarché", value: "5 min à pied" },
        naousa: { label: "Naousa (vie nocturne)", value: "22 km (25 min)" }
      }
    },

    // Neighborhood
    neighborhood: {
      label: "Manger & Explorer",
      title: "Votre Aliki quotidienne",
      subtitle: "Poisson frais, courses simples, promenades du soir et une échelle de village qui rend les longs séjours faciles.",
      nightlife: "Vous préférez la vie nocturne? Naousa est à 25 minutes en voiture — le village le plus animé de l'île.",
      tavernas: {
        mouragio: { name: "To Mouragio", desc: "Front de mer, fruits de mer frais, familial depuis 30 ans", distance: "2 min à pied" },
        aliki: { name: "Aliki Restaurant", desc: "Classiques grecs, recettes familiales depuis 1974", distance: "3 min à pied" },
        thalassamou: { name: "Thalassamou", desc: "Tables en bord de plage, poisson grillé", distance: "4 min à pied" },
        balcony: { name: "To Balcony tou Aki", desc: "Poisson du pêcheur local, simple et frais", distance: "5 min à pied" }
      }
    },

    // Calendar/Availability
    calendar: {
      label: "Disponibilité",
      title: "Consultez la disponibilité générale",
      subtitle: "Utilisez le calendrier comme point de départ, puis dites-nous quel type de long séjour vous imaginez.",
      available: "Disponible",
      booked: "Réservé",
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    },

    // Booking/Contact
    booking: {
      label: "Demande de Long Séjour",
      title: "Parlez-nous du séjour que vous imaginez",
      subtitle: "Les meilleurs séjours ici commencent par l'accord juste : vos dates, votre rythme, les hôtes et le type de temps que vous voulez vivre à Aliki.",
      formTitle: "Parlez-nous de votre long séjour",
      formSub: "Partagez les détails pratiques et le type de séjour que vous avez en tête. Antonis répondra personnellement.",
      hostTitle: "Un mot d'Antonis",
      hostText: "Sea Tree est une maison que nous voulons partager avec des personnes qui comprennent son rythme : le bord calme d'Aliki, le son de l'eau, la cheminée d'hiver et les deux minutes de marche vers la vie du village.",
      directTitle: "Vous préférez parler directement ?",
      directSub: "Écrivez à Antonis sur WhatsApp si vous préférez une conversation directe.",
      fields: {
        name: "Nom",
        email: "Email",
        dates: "Dates souhaitées",
        duration: "Durée du séjour",
        guests: "Hôtes",
        remote: "Allez-vous travailler à distance ?",
        message: "Quel type de séjour imaginez-vous ?"
      },
      placeholders: {
        dates: "ex. 3-24 septembre",
        duration: "ex. 3 semaines",
        guests: "ex. 2 adultes",
        message: "Semaines de travail calme, temps en famille, repos hors saison, base d'été où revenir..."
      },
      remoteOptions: {
        unsure: "Pas encore sûr",
        yes: "Oui",
        no: "Non"
      },
      submit: "Envoyer la demande",
      whatsapp: "Message sur WhatsApp",
      whatsappSub: "Réponse la plus rapide, dans votre langue",
      callLabel: "Appeler",
      phone: "+30 697 3286 811",
      phoneSub: "Anglais, Grec",
      emailLabel: "Email",
      emailCTA: "Envoyer un email",
      platformsTitle: "Vous préférez une plateforme ?",
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
      email: "antocosto@gmail.com",
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
