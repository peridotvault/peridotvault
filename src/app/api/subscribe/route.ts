import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const { email, roles } = await req.json();

        const validRoles = Array.isArray(roles)
            ? roles.filter((r) => r === "gamer" || r === "developer")
            : [];

        if (
            typeof email !== "string" ||
            !/^\S+@\S+\.\S+$/.test(email) ||
            validRoles.length === 0
        ) {
            return NextResponse.json(
                { error: "Invalid data" },
                { status: 400 }
            );
        }

        const response = await fetch(
            `https://api.beehiiv.com/v2/publications/${process.env.NEXT_BEEHIIV_PUBLICATION_ID}/subscriptions`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_BEEHIIV_API_KEY}`,
                },
                body: JSON.stringify({
                    email,
                    reactivate_existing: true,
                    send_welcome_email: true,
                    custom_fields: [
                        {
                            name: "is_gamer",
                            value: validRoles.includes("gamer"),
                        },
                        {
                            name: "is_developer",
                            value: validRoles.includes("developer"),
                        },
                    ],

                }),
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Subscription failed, please try again." },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("error: ", error);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );

    }
}
