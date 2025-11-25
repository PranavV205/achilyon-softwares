import { NextResponse } from "next/server";
import { deals } from "@/lib/data/deals";

export async function GET() {
    return NextResponse.json({
        status: "success",
        count: deals.length,
        data: deals
    });
}
