
const nodemailer = require('nodemailer');

const email = {
    host:'smtp.mailtrap.io',
    port:'0000',
    auth: {
        user: "---",
        pass: "---"
    }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, inof) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let eamil_data = {
    from : '---@gmail.com',
    to : '---@gmail.com',
    subject : 'hello_nodejs',
    text : 'test_nodejs'
}

send(eamil_data);