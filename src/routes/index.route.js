const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {
    //route
    // Khi truyền instance newsRouter vào ở tham số thứ 2 thì express nó sẽ hiểu
    //  là trong instrance đó còn định nghĩa nhiều tuyến đường khác.
    // tham số thứ 2 được hiểu là cấp con của thằng /news
    app.use('/news', newsRouter);
    // Thay vì viết như phía dưới thì bốc tác rỏ ràng ra.
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    app.use('/', siteRouter);
}

module.exports = route;
