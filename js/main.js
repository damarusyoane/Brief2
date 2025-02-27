// document.addEventListener("DOMContentLoaded", function () {
    // //  Fonction pour gérer les menus déroulants
    // function toggleSection(buttonId, sectionId, arrowId) {
    //     const button = document.getElementById(buttonId);
    //     const section = document.getElementById(sectionId);
    //     const arrow = document.getElementById(arrowId);

    //     button.addEventListener("click", function () {
    //         section.classList.toggle("hidden");
    //         arrow.textContent = section.classList.contains("hidden") ? "▼" : "▲";
    //     });
    // }

    // // Activer les menus déroulants
    // toggleSection("togglePersonalInfo", "personalInfo", "arrowPersonal");
    // toggleSection("toggleExperience", "experienceSection", "arrowExperience");
    // toggleSection("toggleEducation", "educationSection", "arrowEducation");
    // toggleSection("toggleSkills", "skillsSection", "arrowSkills");
    // toggleSection("toggleLanguages", "languagesSection", "arrowLanguages");
    // toggleSection("toggleHobbies", "HobbiesSection", "arrowHobbies");

    // // Prévisualisation de la photo de profil
    // document.getElementById("profilePic").addEventListener("change", function (event) {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function (e) {
    //             document.getElementById("profilePreview").src = e.target.result;
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // });

    // //  Mise à jour dynamique du CV
    // const cvForm = document.getElementById("cvForm");
    // const cvPreview = document.getElementById("cvPreview");
    // const cvOutput = document.getElementById("cvOutput");

    // cvForm.addEventListener("input", function () {
    //     const fullName = document.querySelector("[name='fullName']").value;
    //     const birthday = document.querySelector("[name='birthday']").value;
    //     const email = document.querySelector("[name='email']").value;
    //     const phone = document.querySelector("[name='phone']").value;
    //     const companyName = document.getElementById("companyName").value;
    //     const jobTitle = document.getElementById("jobTitle").value;
    //     const jobDuration = document.getElementById("jobDuration").value;
    //     const jobDescription = document.getElementById("jobDescription").value;
    //     const education = document.getElementById("education").value;
    //     const school = document.getElementById("school").value;
    //     const year = document.getElementById("year").value;
    //     const skills = document.getElementById("skills").value;
    //     const languages = document.getElementById("languages").value;
    //     const profilePic = document.getElementById("profilePreview").src;

    //     // Vérifier si au moins un champ est rempli avant d'afficher le CV
    //     if (fullName || birthday || email || phone) {
    //         cvPreview.classList.remove("hidden");
    //     }

    //     cvOutput.innerHTML = `
    //         <div class="text-center">
    //             <img src="${profilePic}" class="w-32 h-32 rounded-full object-cover mx-auto border">
    //             <h2 class="text-xl font-bold mt-2">${fullName || "Nom et prénom"}</h2>
    //             <p>${birthday || "Date de naissance"}</p>
    //             <p>${email || "Email"}</p>
    //             <p>${phone || "Téléphone"}</p>
    //         </div>
    //         <hr class="my-4">
    //         <h3 class="text-lg font-semibold">Expérience Professionnelle</h3>
    //         <p><strong>${companyName || "Entreprise"}</strong> - ${jobTitle || "Poste"} (${jobDuration || "Durée"})</p>
    //         <p>${jobDescription || "Description des missions"}</p>
    //         <hr class="my-4">
    //         <h3 class="text-lg font-semibold">Formation</h3>
    //         <p><strong>${education || "Diplôme"}</strong> - ${school || "Établissement"} (${year || "Année"})</p>
    //         <hr class="my-4">
    //         <h3 class="text-lg font-semibold">Compétences</h3>
    //         <p>${skills || "Liste des compétences"}</p>
    //         <hr class="my-4">
    //         <h3 class="text-lg font-semibold">Langues</h3>
    //         <p>${languages || "Langues maîtrisées"}</p>
    //     `;
    // });
// });
