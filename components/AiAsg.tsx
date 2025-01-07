import React from "react";

export function AiAsg() {
  return <div>Haven't Done It - Yet!</div>;
}

export function AiDetails() {
  return (
    <div className="h-[450] flex flex-col gap-4 overflow-y-scroll">
      <div>
        Machine Learning Engineering & Data Science Assignment: Knowledge
        Distillation
      </div>
      <div>
        <div>Objective: </div> Build and train a teacher–student network for a
        binary sentiment classification task on the IMDb movie reviews dataset
        (https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews).
        Your teacher model will be a pretrained transformer (such as BERT), and
        your student model should be a smaller or simpler model that learns from
        the teacher’s outputs.
      </div>
      <div>
        <div>Technical Requirements: </div>1. Dataset: IMDb Movie Reviews o Use
        the IMDb dataset, which is a classic sentiment classification dataset
        with positive and negative labels. o You can load it easily via the
        Hugging Face datasets library (e.g., datasets.load_dataset("imdb")) or
        by downloading a public IMDb sentiment dataset CSV. o Split the data
        into train and test sets (and optionally a dev/validation set). 2.
        Teacher Model o Pick a pretrained transformer as your “teacher.” o
        Fine-tune this teacher model on the IMDb data until it achieves
        reasonable accuracy (it doesn’t have to be state-of-the-art, just
        functional). One epoch or less will do. 3. Student Model o Create or
        select a smaller model of your choice o Train the student model using
        knowledge distillation, where the student learns from both the ground
        truth labels and the teacher’s soft predictions (logits). Once again,
        one epoch or less will do. 4. Evaluation o Evaluate both teacher and
        student on the test (or dev) set. o Compare key metrics such as
        accuracy, F1 score, or AUC. o Briefly discuss how much accuracy the
        student retains compared to the teacher. 5. Implementation Constraints o
        Use Python o No paid cloud services are required—Google Colab free tier
        or local CPU/GPU is sufficient. o Focusing on correctness and clarity
        over model accuracy. No hyperparameter tuning is required.
      </div>
    </div>
  );
}
