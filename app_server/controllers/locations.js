module.exports.homelist=(req,res)=>{
    res.render('location-list',{title:'home'});
};
module.exports.locationInfo=(req,res)=>{
    res.render('location-info',{title:'Location Info'});
};
module.exports.locationInfo1=(req,res)=>{
    res.render('location-info2',{title:'Location Info1'});
};
module.exports.locationInfo2=(req,res)=>{
    res.render('location-info3',{title:'Location Info2'});
};
module.exports.addreview=(req,res)=>{
    res.render('location-review-forms',{title:'Add review'});
}