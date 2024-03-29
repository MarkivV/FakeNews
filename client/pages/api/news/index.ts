import dbConnect from "../../../utils/dbConnect";
import {NextApiRequest, NextApiResponse, PageConfig} from "next";
import NewsPosts from "../../../models/NewsPosts";
import {method1} from "../../../utils/upload";
import { User } from "../../../models/User";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const {method} = req
    await dbConnect()



    switch (method) {
        case "GET":
            try {
                const lastFivePosts = await NewsPosts.find({published: true}, {image: 1, title: 1, _id: 1, updatedAt: 1, category: 1, url: 1 })
                    .sort({ updatedAt: -1 })
                    .limit(5);
                const topThreeRatedPosts = await NewsPosts.find(
                    { rating: { $gte: 0, $lte: 9 }, published: true },
                    { image: 1,title: 1, _id: 1, updatedAt: 1, category: 1, description: 1, url: 1  }
                )
                    .sort({ rating: -1 })
                    .limit(3);

                const postsByCategory = await NewsPosts.aggregate([
                    { $match: { published: true } },
                    {
                        $group: {
                            _id: '$category',
                            posts: { $push: '$$ROOT' },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            category: '$_id',
                            posts: {
                                $slice: [
                                    {
                                        $map: {
                                            input: '$posts',
                                            as: 'post',
                                            in: {
                                                _id: '$$post._id',
                                                title: '$$post.title',
                                                image: '$$post.image',
                                                updatedAt: '$$post.createdAt',
                                                url: '$$post.url',
                                                category: '$_id'
                                            }
                                        }
                                    },
                                    10
                                ]
                            },
                            count: 1
                        }
                    },
                    { $unwind: '$posts' },
                    { $replaceRoot: { newRoot: '$posts' } }
                ]);
                const news = {
                    lastFivePosts,
                    topThreeRatedPosts,
                    postsByCategory
                }
                res.status(200).json(news)
            }catch (e:any) {
                res.status(500).json(e)
            }
            break;
        case "POST":
            try {
                const UserEmailVerified = await User.findById(req.body.creator)
                if(UserEmailVerified.emailVerified === false){
                    res.status(203).send("Email not verified")
                    return
                }else{
                    const newsCreate = await NewsPosts.create(req.body)
                    res.status(201).json(newsCreate)
                }
            }catch (e: any) {
                res.status(500).json(e)
            }
            break;
        default:
            break;
    }

}

