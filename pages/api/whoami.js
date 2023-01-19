import {validateUser} from "@/lib/propelauth"

export default async function handler(req, res) {
    const user = await validateUser(req, res)
    res.status(200).json(user)
}