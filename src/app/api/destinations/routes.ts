import { NextResponse } from "next/server";
import { destinations } from "@/lib/data/destinations";

export async function GET() {
    return NextResponse.json({
        status: "success",
        count: destinations.length,
        data: destinations
    });
}
