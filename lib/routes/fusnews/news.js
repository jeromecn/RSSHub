const got = require('@/utils/got');

module.exports = async (ctx) => {
    const { id } = ctx.params;

    const { data } = (await got.get(`http://192.168.1.164:10239/api/rss?a=0&i=10&n=com.xxx.xxx&s=30&c=${id}`)).data;

    ctx.state.data = {
        title: `fusnews`,
        link: `https://www.google.com`,
        description: `us news`,
        item: data.map((item) => ({
            title: item.title,
            description:item.summary,
            link: item.link,
            auther:item.auther,
            image:item.img,
            category:item.category,
            pubDate: new Date(item.date).toUTCString(),
            content: item.content,
        })),
    };
};
