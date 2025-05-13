document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.setAttribute('novalidate', true);

        form.addEventListener('submit', e => {
            const fields = form.querySelectorAll('input, textarea');
            let isValid = true;

            fields.forEach(field => {
                const error = validateField(field);
                if (error) {
                    isValid = false;
                    displayError(field, error);
                } else {
                    clearError(field);
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const error = validateField(input);
                if (error) {
                    displayError(input, error);
                } else {
                    clearError(input);
                }
            });
        });
    });

    function validateField(field) {
        const name = field.getAttribute('name') || field.getAttribute('id');
        const value = field.value.trim();

        if (field.hasAttribute('required') && value === '') {
            return `${formatName(name)} is required.`;
        }

        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address.';
            }
        }

        if (field.type === 'password' && value.length < 6) {
            return 'Password must be at least 6 characters.';
        }

        if (field.name === 'confirm_password' || field.id === 'confirm_password') {
            const password = form.querySelector('input[name="password"], input#password');
            if (password && password.value !== value) {
                return 'Passwords do not match.';
            }
        }

        if (field.type === 'tel' || field.name === 'phone') {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value)) {
                return 'Please enter a valid 10-digit phone number.';
            }
        }

        return null;
    }

    function displayError(field, message) {
        clearError(field);
        const error = document.createElement('div');
        error.className = 'form-error';
        error.style.color = 'red';
        error.style.fontSize = '0.9em';
        error.textContent = message;
        field.classList.add('input-error');
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    function clearError(field) {
        field.classList.remove('input-error');
        const next = field.nextSibling;
        if (next && next.className === 'form-error') {
            next.remove();
        }
    }

    function formatName(name) {
        return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
});