
import { useEffect, useState } from "react"

export default function TotalCount({ totalCount })
{

    return <>
        <div className="body__totalCounts">
            {`Total counts: ${totalCount}`}
        </div>
    </>
}