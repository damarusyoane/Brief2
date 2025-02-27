document.addEventListener("DOMContentLoaded", function () {
    // 🎯 Fonction pour gérer les menus déroulants
    function toggleSection(buttonId, sectionId, arrowId) {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);
        const arrow = document.getElementById(arrowId);

        button.addEventListener("click", function () {
            section.classList.toggle("hidden");
            arrow.textContent = section.classList.contains("hidden") ? "▼" : "▲";
        });
    }

    // 📌 Activer les menus déroulants
    toggleSection("togglePersonalInfo", "personalInfo", "arrowPersonal");
    toggleSection("toggleExperience", "experienceSection", "arrowExperience");
    toggleSection("toggleEducation", "educationSection", "arrowEducation");
    toggleSection("toggleSkills", "skillsSection", "arrowSkills");
    toggleSection("toggleLanguages", "languagesSection", "arrowLanguages");
    toggleSection("toggleHobbies", "HobbiesSection", "arrowHobbies");

    // 🎭 Prévisualisation de la photo de profil
    document.getElementById("profilePic").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profilePreview").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    

    // 📄 Mise à jour dynamique du CV
    const form = document.getElementById("cvForm");
    const preview = document.getElementById("cvPreview");
    const output = document.getElementById("cvOutput");
        
    form.addEventListener("input", updatePreview);
    form.addEventListener("submit", generatePDF);

    function updatePreview() {
        const profilePic = document.getElementById("profilePic").files[0];
        const fullName = form.fullName.value;
        const birthday = form.birthday.value;
        const age = form.age.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const situation = document.querySelector('input[name="situation"]:checked')?.value || "";
        const description = document.getElementById("description").value;

        const companyName = document.getElementById("companyName").value;
        const jobTitle = document.getElementById("jobTitle").value;
        const jobDateStart = document.getElementById("jobDateStart").value;
        const jobDateEnd = document.getElementById("jobDateEnd").value;
        const jobCity = document.getElementById("jobCity").value;
        const jobDescription = document.getElementById("jobDescription").value;

        const education = document.getElementById("education").value;
        const school = document.getElementById("school").value;
        const year = document.getElementById("year").value;

        const langue= document.getElementById("langueInput").value;
        const niveauLangue= document.getElementById("niveauInput").value;

        const skills = document.getElementById("skills").value;
        const hobbies = document.getElementById("hobbies").value;
        
        preview.classList.remove("hidden");
        output.innerHTML = `
            <div class='p-6 border rounded-md shadow-md bg-white'>
                <img src='${profilePic ? URL.createObjectURL(profilePic) : "images/default-profile.png"}' class='w-32 h-32 rounded-full mx-auto mb-6' alt='Photo de profil'>
                <h2 class='text-2xl font-bold text-gray-800'>${fullName}</h2>
                <h3 class='text-xl font-bold text-gray-800'>Informations personnelles</h3>
                <p><strong>Âge :</strong> ${age} ans</p>
                <p><strong>Date de naissance :</strong> ${birthday}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone}</p>
                <p><strong>Adresse :</strong> ${address}</p>
                <p><strong>Situation :</strong> ${situation}</p>
                <p><strong>Description :</strong> ${description}</p>
                <hr class='my-4'>
                <h3 class='text-xl font-bold text-gray-800'>Expérience professionnelle</h3>
                <p><strong>Entreprise :</strong> ${companyName}</p>
                <p><strong>Poste :</strong> ${jobTitle}</p>
                <p><strong>Date de début :</strong> ${jobDateStart}</p>
                <p><strong>Date de fin :</strong> ${jobDateEnd}</p>
                <p><strong>Ville :</strong> ${jobCity}</p>
                <p><strong>Missions :</strong> ${jobDescription}</p>
                <hr class='my-4'>
                <h3 class='text-xl font-bold text-gray-800'>Formation</h3>
                <p><strong>Diplôme :</strong> ${education}</p>
                <p><strong>Établissement :</strong> ${school}</p>
                <p><strong>Année :</strong> ${year}</p>
                <hr class='my-4'>
                <h3 class='text-xl font-bold text-gray-800'>Compétences</h3>
                <p>${skills.replace(/\n/g, "<br>")}</p>
                <hr class='my-4'>
                <h3 class='text-xl font-bold text-gray-800'>Langues</h3>
                <p><strong>Langues :</strong> ${langue}</p>
                <p><strong>Niveau :</strong> ${niveauLangue}</p>
                <hr class='my-4'>
                <h3 class='text-xl font-bold text-gray-800'>Centres d'intérêts</h3>
                <p>${hobbies.replace(/\n/g, "<br>")}</p>
            </div>
            <button type='button' onclick='' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' id='downloadPDF'>Télécharger le CV</button>
        `;
    }

    function generatePDF(event) {
        event.preventDefault();
        const element = document.getElementById("cvOutput");
        html2pdf().from(element).save("Mon_CV.pdf");
    }
});
