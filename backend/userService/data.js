const bcrypt = require("bcryptjs");

const data = {
    customers: [
        {
            firstname: 'Hafsa',
            lastname: 'Begum',
            addresses: [
                {
                    address: 'pathantula',
                    city: 'sylhet',
                    state: '',
                    postalCode: '3114'
                }
            ],
            phone: '1942448775',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('123456', 8),
            profilePicture: ''
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            addresses: [
                {
                    address: 'pathantula',
                    city: 'sylhet',
                    state: '',
                    postalCode: '3114'
                }
            ],
            phone: '9193847588',
            email: 'john@123.com',
            password: bcrypt.hashSync('123456', 8),
            profilePicture: ''
        }
    ],
};
module.exports = data;