import React from "react";

export function BackEndAsg() {
  return <div>Haven't Done It - Yet!</div>;
}

export function BackDetails() {
  return (
    <div className="h-[450px] flex flex-col gap-4 overflow-y-scroll">
      <div>Backend Engineering Assignment: Simple RAG API</div>
      <div>
        <div>Objective: </div> Create a minimal Python or Node.js backend
        service that: 1. Stores a small set of documents (text passages) from
        the provided Appendix. 2. Indexes these documents with embeddings a. Use
        an embedding library and model of your choice (i.e. the
        `sentence-transformers` library and the
        `sentence-transformers/all-MiniLM-L6-v2` model) so that, given a query,
        the service can retrieve the most relevant text passage(s) b. Use a
        vector store of your choice (i.e. FAISS)
      </div>
      <div>
        <div>Technical Requirements: </div>1. Data Ingestion o Use the sample
        text passages we’ve provided in the Appendix. o Convert each passage
        into an embedding using your chosen embedding approach. o Store both the
        raw passage and its embedding in your chosen vector store 2. Retrieval o
        Implement a mechanism to find the most relevant passages for a given
        user query. o Use embeddings to compare the user query against stored
        passages (e.g., cosine similarity). 3. API o Expose two HTTP endpoints.
        1. POST /ingest – Ingest new text to be stored in the vector store. 2.
        GET /query?text=... – Retrieve the most relevant ingested text(s) for a
        user’s text. 4. Testing o Include a test suite or demonstration that
        exercises your API endpoints using automated tests (e.g., using pytest
        or a Node.js testing framework) o We want to see how you validate that
        your code works as intended. 5. Implementation Constraints o Use Python,
        or Node.js o No paid cloud service is required—simple local or free-tier
        hosting is enough.
      </div>
    </div>
  );
}
