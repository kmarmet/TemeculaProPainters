import emailjs from '@emailjs/browser';

const EmailJs = {
    userId: "user_xkyvL3Rusz36TS0ctjfU9",
    services: {
        CompanyEmail: "CompanyEmail"
    },
    templates: {
        ContactForm: "ContactForm",
    },
    sendEmail: (service, template, content) => {
        emailjs.send(service, template, content)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }
}

export default EmailJs;