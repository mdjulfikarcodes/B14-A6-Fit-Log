"use client";

import { Workout } from "@/types/workout";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");
      const storedDone = localStorage.getItem("fitlog-done");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }

      if (storedDone) {
        setDoneIds(JSON.parse(storedDone));
      }
    } catch {
      localStorage.removeItem("fitlog-plan");
      localStorage.removeItem("fitlog-saved");
      localStorage.removeItem("fitlog-done");
    }
  }, []);

  // Save plan
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  // Save completed workouts
  useEffect(() => {
    localStorage.setItem("fitlog-done", JSON.stringify(doneIds));
  }, [doneIds]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    // Already added
    if (plan.some((item) => item.id === workout.id)) {
      toast(`${workout.name} is already in today's plan.`);
      return;
    }

    // Maximum 5 workouts
    if (plan.length >= 5) {
      toast.error("Today's plan is limited to 5 lifts.");
      return;
    }

    setPlan((current) => [...current, workout]);

    toast.success("Added to today's plan");
  };

  // Save workout
  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast(`${workout.name} is already saved.`);
      return;
    }

    setSaved((current) => [...current, workout]);

    toast.success("Saved for later");
  };

  // Remove from today's plan
  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((item) => item.id !== id)
    );

    setDoneIds((current) =>
      current.filter((doneId) => doneId !== id)
    );

    toast.success("Workout removed");
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((item) => item.id !== id)
    );

    toast.success("Saved workout removed");
  };

  // Mark workout as done
  const markAsDone = (id: number) => {
    setDoneIds((current) =>
      current.includes(id)
        ? current
        : [...current, id]
    );

    toast.success("Workout marked as done");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        doneIds,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}