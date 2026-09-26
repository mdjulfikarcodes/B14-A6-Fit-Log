
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
  isLoaded: boolean;
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
  const [isLoaded, setIsLoaded] = useState(false);

// Load data from localStorage
  

  useEffect(() => {
    const loadData = () => {
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
      } catch (error) {
        console.error("Failed to load FitLog data:", error);

        localStorage.removeItem("fitlog-plan");
        localStorage.removeItem("fitlog-saved");
        localStorage.removeItem("fitlog-done");
      } finally {
        setIsLoaded(true);
      }
    };

    const timer = setTimeout(loadData, 0);

    return () => clearTimeout(timer);
  }, []);

  // ==============================
  // Save Plan
  // ==============================

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, isLoaded]);

  // ==============================
  // Save Saved Workouts
  // ==============================

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, isLoaded]);

  // ==============================
  // Save Completed Workouts
  // ==============================

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "fitlog-done",
      JSON.stringify(doneIds)
    );
  }, [doneIds, isLoaded]);

  // ==============================
  // Add Workout to Today's Plan
  // ==============================

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast(
        `${workout.name} is already in today's plan.`
      );
      return;
    }

    if (plan.length >= 5) {
      toast.error(
        "Today's plan is limited to 5 lifts."
      );
      return;
    }

    setPlan((current) => [...current, workout]);

    toast.success("Added to today's plan");
  };

  // ==============================
  // Save Workout
  // ==============================

  const saveWorkout = (workout: Workout) => {
    if (
      saved.some((item) => item.id === workout.id)
    ) {
      toast(`${workout.name} is already saved.`);
      return;
    }

    setSaved((current) => [
      ...current,
      workout,
    ]);

    toast.success("Saved for later");
  };

  // ==============================
  // Remove from Today's Plan
  // ==============================

  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((item) => item.id !== id)
    );

    setDoneIds((current) =>
      current.filter((doneId) => doneId !== id)
    );

    toast.success("Workout removed");
  };

  // ==============================
  // Remove from Saved
  // ==============================

  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((item) => item.id !== id)
    );

    toast.success("Saved workout removed");
  };

  // ==============================
  // Mark Workout as Done
  // ==============================

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
        isLoaded,
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

