// একটি রি-ইউজেবল ফাংশন যা স্মুথ স্ক্রোল হ্যান্ডেল করে (React Logic)
const handleSmoothScroll = (targetId) => {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
};

// পেজের সব হ্যাশ (#) লিংকগুলো একসাথে সিলেক্ট করা
const navLinks = document.querySelectorAll("a[href^='#']");

// লুপ চালিয়ে ইভেন্ট লিসেনার যুক্ত করা
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // ব্রাউজারের ডিফল্ট জাম্পিং বন্ধ করা
        const targetId = this.getAttribute("href");
        handleSmoothScroll(targetId); // ফাংশন কল
    });
});
