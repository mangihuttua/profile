    //  Button navigation 

        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const overlay = document.getElementById("overlay");

        const openIcon = document.getElementById("open-icon");
        const closeIcon = document.getElementById("close-icon");

        function toggleMenu() {

            mobileMenu.classList.toggle("translate-x-full");

            overlay.classList.toggle("hidden");

            openIcon.classList.toggle("hidden");

            closeIcon.classList.toggle("hidden");
        }

        menuBtn.addEventListener("click", toggleMenu);

        overlay.addEventListener("click", toggleMenu);

        document
            .querySelectorAll(".mobile-link")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.add("translate-x-full");

                    overlay.classList.add("hidden");

                    openIcon.classList.remove("hidden");

                    closeIcon.classList.add("hidden");

                });

            });

    //photoFloat animation

        cons tphoto = document.querySelector("#about-photo");

            if (photo) {

                const lastScroll = 0;

                const photoObserver = new IntersectionObserver((entries)=>{

                    entries.forEach(entry=>{

                        constcurrentScroll = window.scrollY;

                        if(entry.isIntersecting && currentScroll > lastScroll){
                            photo.classList.add("show");
                        }

                        if(!entry.isIntersecting){
                            photo.classList.remove("show");
                        }

                        lastScroll = currentScroll;

                    });

                }, {
                    threshold: 0.3,
                    rootMargin: "0px 0px -100px 0px"
                });

                photoObserver.observe(photo);
            }
  
    //email 

        emailjs.init("0MliWVPTf2anzTexu");

        constform = document.getElementById("contact-form");
        constbutton = document.getElementById("sendBtn");

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            button.innerHTML = "Sending...";
            button.disabled = true;

            emailjs.sendForm(

                "service_v6urvqa",

                "template_6trkmqt",

                this

            ).then(function () {

                alert("Pesan Anda berhasil di kirim!");

                form.reset();

                button.innerHTML = "Send Message";
                button.disabled = false;

            }).catch((error) => {

                console.error("EmailJS Error:", error);

                alert(error.text || error.message);


            });

        });