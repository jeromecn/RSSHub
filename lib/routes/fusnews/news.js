const got = require('@/utils/got');

module.exports = async (ctx) => {
    const { id } = ctx.params;

    const { news } = (await got.get(`http://192.168.1.164:10239/api/rss?a=0&i=10&n=com.xxx.xxx&s=30&c=${id}`)).data;
    const [{}] = news;

    ctx.state.data = {
        title: `fusnews`,
        link: `https://www.google.com`,
        description: `us news`,
        item: news.map((item) => ({
            title: item.title,
            summary:time.summary,
            link: item.link,
            auther:item.auther,
            img:item.img,
            category:item.category,
            date: new Date(item.date).toUTCString(),
            content: item.content,
        })),
    };
};
