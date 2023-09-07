/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLoc8r is a website that helps you find restaurants nearby with wifi. It lists nearby places with Wi-Fi where people can go to get some work done. It also displays facilities, opening times, a rating, and a location map for each place. Visitors will be able to submit ratings and reviews.Loc8r is a website that helps you find restaurants nearby with wifi. It lists nearby places with Wi-Fi where people can go to get some work done. It also displays facilities, opening times, a rating, and a location map for each place. Visitors will be able to submit ratings and reviews.\n\nThe website is built using the MEAN stack, which stands for MongoDB, Express.js, AngularJS, and Node.js. The website is designed to be responsive and works on all devices.'
    });
};