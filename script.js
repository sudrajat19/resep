const recipes = [
  {
    title: "Balado cumi pete",
    image: "/gambar/cumipete.jpg",
    description: "200 gr cumi asin, bilas air bersih lalu goreng sebentar, tiriskan, 3 papan pete, kupas, 5 buah tomat hijau, potong-potong...",
    author: "Resep Masakan",
    time: "30-40 menit",
    link: "/cumipete.html",
    category: "seafood"
  },
  {
    title: "Tempe Mendoan",
    image: "/gambar/tempemendoan.jpg",
    description: "1 papan tempe, iris tipis, 9 sdm tepung terigu, 3 sdm tepung beras Rosebrand, 6 sdm tepung serbaguna, Sejumput lada, garam & kaldu bubuk, Secukupnya daun bawang...",
    author: "Resep Masakan",
    time: "25-30 menit",
    link: "/tempemendoan.html",
    category: "vegetarian"
  },
  {
    title: "Cumi Asin Asam",
    image: "/gambar/cumiasin.jpg",
    description: "3 sdm minyak, 200 gram cumi-cumi telur asin, seduh dengan air panas, tiriskan, 4 siung bawang putih iris tipis, 8 siung bawang merah iris tipis...",
    author: "Resep Masakan",
    time: "20-25 menit",
    link: "/cumiasin.html",
    category: "seafood"
  },
  {
    title: "Nasi Goreng Spesial",
    image: "/gambar/nasigoreng.jpg",
    description: "1 buah paha ayam atas bawah rebus, suwir ayamnya, 2 buah telur, kocok lepas, 150 g udang tanpa kulit, 5 buah bakso sapi, potong-potong, 5 buah bakso ikan, potong-potong...",
    author: "Resep Masakan",
    time: "20-30 menit",
    link: "/nasigoreng.html",
    category: "comfort food"
  },
  {
    title: "Udang Saus Padang",
    image: "/gambar/sauspadang.jpeg",
    description: "250 gram udang kupas,  3 cabai rawit, 2 siung bawang putih, 2 butir bawang merah, 1/2 bawang bombai, 2 ruas jahe, geprek, 1 batang daun bawang...",
    author: "Resep Masakan",
    time: "20-30 menit",
    link: "/udangsauspadang.html",
    category: "seafood"
  },
  {
    title: "Udang Asam Manis",
    image: "/gambar/udang.jpeg",
    description: "500 gr udang segar, 1 buah bawang bombay, 2 siung bawang putih, 1 sdt saos tomat, 1 sdt saos tiram, 1 batang daun bawang, secukupnya Lada dan garam...",
    author: "Resep Masakan",
    time: "30 menit",
    link: "/udangasammanis.html",
    category: "seafood"
  },
  {
    title: "Tumis Kangkung",
    image: "/gambar/tumiskangkung.jpeg",
    description: "1 ikat kangkung, 2 bawang merah, 1 bawang putih, 2 cabai merah, 3 cabai rawit, Gula garam saos tiram, Minyak untuk menumis...",
    author: "Resep Masakan",
    time: "3-5 menit",
    link: "/tumiskangkung.html",
    category: "vegetarian"
  },
  {
    title: "Ayam Kecap Pedas Manis",
    image: "/gambar/ayamkecap.webp",
    description: "½ kg ayam, Gula, Garam, Saos tiram, Kecap Manis, Minyak untuk menggoreng, 7 siung bawang merah, 4 siung bawang putih, 3 buah cabe kriting, 15 buah cabe setan, 2 ruas jahe geprek (optional)",
    author: "Resep Masakan",
    time: "1jam 30 menit",
    link: "/ayamkecap.html",
    category: "chicken"
  },
  {
    title: "Ayam Penyet",
    image: "/gambar/ayampenyet.webp",
    description: "½ kg ayam yang berkulit, 100 ml air, ¼ sendok teh merica bubuk, Minyak untuk menggoreng...",
    author: "Resep Makanan",
    time: "1jam 30 menit",
    link: "/ayampenyet.html",
    category: "chicken"
  },
  {
    title: "Ayam Goreng",
    image: "/gambar/ayamgoreng.jpg",
    description: "1 kg ayam potong, 1 sdm Bawang putih bubuk, 1,5 sdm ketumbar bubuk, 1 sdm kaldu ayam, 1 sdm saos tiram...",
    author: "Resep Makanan",
    time: "15 menit dengan suhu 150 derajat",
    link: "/ayamgoreng.html",
    category: "chicken"
  },
  {
    title: "Sup Ayam Fillet",
    image: "/gambar/supayam.jpg",
    description: "200 gr ayam fillet potong, 2 bh wortel, 1 batang kayumanis, 1 ruas jahe geprek, 1/2 sdm garlic oil...",
    author: "Resep Makanan",
    time: "30-40 menit",
    link: "/sopayamfillet.html", 
    category: "chicken"
  },
  {
    title: "Ayam Panggang Lada Hitam",
    image: "/gambar/ayampanggang.jpg",
    description: "Ayam, potong-potong, 500 gram Jeruk nipis, ambil airnya, 1 buah Bawang bombay, iris memanjang, 1/2 butir Daun salam, 2 lembar Kaldu bubuk, 1 sdm Kecap manis, 5 sdm Saus tiram, 3 sdm...",
    author: "Resep Makanan",
    link: "/ayampanggang.html",
    category: "chicken"
  },
  {
    title: "Ayam Bakar",
    image: "/gambar/ayambakar.jpg",
    description: "1 ekor (1 kg) ayam negeri, potong 8 bagian 1 buah jeruk nipis, ambil airnya 5 sdm minyak sayur 1 sdm cabe merah giling 3 sdm kecap manis 2 sdm saus tiram... ",
    author: "Resep Makanan",
    time: "60 menit",
    link: "/ayambakar.html",
    category: "chicken"
  },
  {
    title: "Soto Medan",
    image: "/gambar/sotomedan.avif",
    description: "Ayam, potong jadi 4 bagian - 1 ekor Santan kental, dari 1 butir kelapa - 1/2 liter, Santan encer - 1,2 liter,Lengkuas - 2 cm,Serai, memarkan - 1 batang,Bunga lawang - 1 buah,Kapulaga - 2 butir... ",
    author: "Resep Makanan",
    time: "80 menit",
    link: "/sotomedan.html",
    category: "chicken"
  },
  {
    title: "Pindang Ikan Mas",
    image: "/gambar/pindangikanmas.jpg",
    description: "1 buah jeruk nipis, 1 ikat daun kemangi, 4 lembar daun jeruk, 2 batang daun bawang, 7 biji rawit utuh,1 mata asam kadis,20 gr Fiber Creme, secukupnya Garam & bumbu kaldu,400 gr air... ",
    author: "Resep Makanan",
    time: "+- 50menit",
    link: "/pindangikanmas.html",
    category: "fish"
  },
  {
    title: "Ayam Rica-rica",
    image: "/gambar/ayamrica.jpg",
    description: "Ayam kampung, potong menjadi 16 bagian atau potong sesuai selera - 1 ekor, Jeruk nipis, ambil airnya - 1 buah, Daun jeruk purut, buang tulang tengahnya - 15 lembar ... ",
    author: "Resep Makanan",
    time: "+- 50menit",
    link: "/ayamrica.html",
    category: "chicken"
  },
  {
    title: "Ayam Gulai",
    image: "/gambar/ayamgulai.jpg",
    description: "1 ekor ayam, 10 bawang merah, 7 bawang putih, 7 cabe merah kriting, 5 cabe rawit merah, 3 kemiri, 1 sdt ketumbar, 3 cm jahe, 4 cm kunyit, Sedikit pala ... ",
    author: "Resep Makanan",
    time: "+- 120menit",
    link: "/ayamgulai.html",
    category: "chicken"
  },
];

const recipesPerPage = 5;
      let currentPage = 1;
      let filteredRecipes = recipes;

      function renderRecipe(recipe) {
        return `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                    <a href="${recipe.link}">
                        <img src="${recipe.image}" alt="${recipe.title}" class=" w-full h-64 object-cover" />
                    </a>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-gray-800">
                            <a href="${recipe.link}">${recipe.title}</a>
                        </h2>
                        <p class="mt-2 text-gray-600 text-sm">${recipe.description}</p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-gray-500 text-xs">${recipe.author}</span>
                            <span class="text-gray-500 text-xs">${recipe.time}</span>
                        </div>
                    </div>
                </div>
            `;
      }

      function renderPagination(totalRecipes) {
        const totalPages = Math.ceil(totalRecipes / recipesPerPage);
        const paginationControls = document.getElementById("pagination-controls");
        paginationControls.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement("button");
          pageButton.textContent = i;
          pageButton.classList.add("px-4", "py-2", "mx-1", "bg-blue-500", "text-white", "rounded");
          pageButton.onclick = () => {
            currentPage = i;
            renderPage();
          };
          paginationControls.appendChild(pageButton);
        }
      }

      function renderPage() {
        const startIndex = (currentPage - 1) * recipesPerPage;
        const endIndex = currentPage * recipesPerPage;
        const pageRecipes = filteredRecipes.slice(startIndex, endIndex);

        const container = document.getElementById("recipe-container");
        container.innerHTML = "";
        pageRecipes.forEach((recipe) => {
          container.innerHTML += renderRecipe(recipe);
        });

        renderPagination(filteredRecipes.length);
      }

      function searchRecipes(event) {
        const query = event.target.value.toLowerCase();
        filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query));
        currentPage = 1;
        renderPage();
      }

      document.getElementById("search-input").addEventListener("input", searchRecipes);

      document.getElementById("category-filter").addEventListener("change", function () {
        const selectedCategory = this.value;
        if (selectedCategory) {
          filteredRecipes = recipes.filter((recipe) => recipe.category === selectedCategory);
        } else {
          filteredRecipes = recipes;
        }
        currentPage = 1;
        renderPage();
      });

      renderPage();