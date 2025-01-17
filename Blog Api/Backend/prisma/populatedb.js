const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function populate(){
    await prisma.User.createMany({
        data: [
            {email: "a@a.com", password: "a"},
            {email: "b@b.com", password: "b"},
            {email: "c@c.com", password: "c"},
        ]
    });

    await prisma.Blog.createMany({
        data: [
            {title: "Blog1", date: "8th jan 2025", content: "This is some content1."},
            {title: "Blog2", date: "8th jan 2025", content: "This is some content2."},
            {title: "Blog3", date: "8th jan 2025", content: "This is some content3."},
            {title: "Blog4", date: "8th jan 2025", content: "This is some content4."},
            {title: "Blog5", date: "8th jan 2025", content: "This is some content5."},
            {title: "Blog6", date: "8th jan 2025", content: "This is some content6."},
            {title: "Blog7", date: "8th jan 2025", content: "This is some content7."},
            {title: "Blog8", date: "8th jan 2025", content: "This is some content8."},
        ]
    });

    await prisma.Comment.createMany({
        data: [
            {content: "Comment1", date: "8th jan 2025", userEmail: "a@a.com", blogId: 1 },
            {content: "Comment2", date: "8th jan 2025", userEmail: "b@b.com", blogId: 2 },
            {content: "Comment3", date: "8th jan 2025", userEmail: "c@c.com", blogId: 3 },
        ]
    })
}

populate();