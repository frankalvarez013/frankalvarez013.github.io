"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import getIntegers from "@/app/api/fetchIntegers";
export function FrontEndAsg() {
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryFn: async (ctx) => await getIntegers(10, ctx.pageParam),
    queryKey: ["integers"],
    getNextPageParam: (lastGroup) => lastGroup.nextOffset,
    initialPageParam: 1,
  });
  const allRows = data
    ? data.pages.flatMap((d) => {
        return d.results;
      })
    : [];
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
  });
  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();
    console.log("Current virtual items:", rowVirtualizer.getVirtualItems());
    if (!lastItem) {
      return;
    }

    if (
      lastItem.index === allRows.length &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);
  // console.log("WTF ", data.pages);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="font-medium text-xl">Infinite Scrolling React App</div>
      {/* The scrollable element for your list */}
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div ref={parentRef} className="w-full overflow-auto h-[400px]">
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const isLoaderRow = virtualRow.index > allRows.length - 1;
              const post = allRows[virtualRow.index];

              return (
                <div
                  key={virtualRow.index}
                  className={
                    virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {isLoaderRow
                    ? hasNextPage
                      ? "Loading more..."
                      : "Nothing more to load"
                    : post}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
    </div>
  );
}
export function FrontDetails() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div>Frontend Engineering Assignment: Infinite Scrolling React App </div>
      <div>
        <div>Objective: </div> Build a simple Next.js application that displays
        an infinite list of integers. As the user scrolls down, the next page of
        integers should be fetched automatically via an API call.
      </div>
      <div>
        <div>Technical Requirements: </div>1. Next.js Ensure your application
        runs locally via npm run dev or yarn dev. 2. React Query o Use React
        Query (@tanstack/react-virtual) to handle data fetching and caching. o
        Implement a basic pagination (or cursor-based approach) for loading more
        integers. 3. React Virtual o Use React Virtual (@tanstack/react-virtual)
        to render a virtualized list. o As the user scrolls, load the next page
        of data and append it to the list. 4. Infinite Scrolling o The list of
        integers should load continuously. o For example, if each page returns
        20 integers, scrolling to the bottom should trigger a fetch for the next
        20 integers, and so on. 5. API o You can create an API endpoint directly
        in your Next.js project (e.g., using app/api routes) that returns a
        paginated response of integers. o The key point is to demonstrate how
        you handle an async fetch and integrate it with React Query.
      </div>
    </div>
  );
}
