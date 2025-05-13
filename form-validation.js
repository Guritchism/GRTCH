$(document).ready(function() {
    // Form validation
    const contactForm = $("#contactForm");
    const formSuccess = $("#formSuccess");
    let isFormValid = true;

    // Character counter for message
    $('#message').on('input', function() {
        const charCount = $(this).val().length;
        $('#messageCharCount').text(charCount);
    });

    // Validate on submit
    contactForm.on('submit', function(e) {
        e.preventDefault();
        isFormValid = true;

        // Reset previous error states
        $('.form-group').removeClass('form-error');
        $('.error-message').text('');

        // Validate full name
        const fullName = $('#fullName').val().trim();
        if (!fullName) {
            showError('fullName', 'Nama lengkap wajib diisi');
        } else if (fullName.length > 50) {
            showError('fullName', 'Nama lengkap maksimal 50 karakter');
        }

        // Validate email
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError('email', 'Email wajib diisi');
        } else if (!emailRegex.test(email)) {
            showError('email', 'Format email tidak valid');
        } else if (email.length > 100) {
            showError('email', 'Email maksimal 100 karakter');
        }

        // Validate phone number
        const phone = $('#phone').val().trim();
        const phoneRegex = /^[\d\s\+\-\(\)]{10,15}$/;
        if (!phone) {
            showError('phone', 'Nomor handphone wajib diisi');
        } else if (!phoneRegex.test(phone)) {
            showError('phone', 'Format nomor handphone tidak valid');
        } else if (phone.length > 15) {
            showError('phone', 'Nomor handphone maksimal 15 karakter');
        }

        // Validate message
        const message = $('#message').val().trim();
        if (!message) {
            showError('message', 'Pesan wajib diisi');
        } else if (message.length > 500) {
            showError('message', 'Pesan maksimal 500 karakter');
        }

        // If form is valid, process it
        if (isFormValid) {
            // In a real application, you would send the form data to a server
            // For this example, we'll just show a success message
            contactForm.slideUp(300, function() {
                formSuccess.slideDown(300);
                
                // Reset form after 5 seconds and show it again
                setTimeout(function() {
                    contactForm[0].reset();
                    formSuccess.slideUp(300, function() {
                        contactForm.slideDown(300);
                    });
                }, 5000);
            });
        }
    });

    // Helper function to show errors
    function showError(fieldId, message) {
        $(`#${fieldId}`).parent().addClass('form-error');
        $(`#${fieldId}-error`).text(message);
        isFormValid = false;
    }

    // Real-time validation as user types
    $('.contact-form input, .contact-form textarea').on('blur', function() {
        const fieldId = $(this).attr('id');
        const value = $(this).val().trim();

        // Clear previous error
        $(this).parent().removeClass('form-error');
        $(`#${fieldId}-error`).text('');

        // Validate based on field type
        switch (fieldId) {
            case 'fullName':
                if (!value) {
                    showError(fieldId, 'Nama lengkap wajib diisi');
                } else if (value.length > 50) {
                    showError(fieldId, 'Nama lengkap maksimal 50 karakter');
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    showError(fieldId, 'Email wajib diisi');
                } else if (!emailRegex.test(value)) {
                    showError(fieldId, 'Format email tidak valid');
                }
                break;
                
            case 'phone':
                const phoneRegex = /^[\d\s\+\-\(\)]{10,15}$/;
                if (!value) {
                    showError(fieldId, 'Nomor handphone wajib diisi');
                } else if (!phoneRegex.test(value)) {
                    showError(fieldId, 'Format nomor handphone tidak valid');
                }
                break;
                
            case 'message':
                if (!value) {
                    showError(fieldId, 'Pesan wajib diisi');
                } else if (value.length > 500) {
                    showError(fieldId, 'Pesan maksimal 500 karakter');
                }
                break;
        }
    });
});
