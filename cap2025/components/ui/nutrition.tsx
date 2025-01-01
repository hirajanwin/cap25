'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';

interface NutritionProps {
  metrics?: {
    proteinIntake7D: number;
    fiberIntake7D: number;
    predictedMealImpactScore: number;
    averageMealImpactScore: number;
    fat1D: number;
    carbs1D: number;
    netCarbs1D: number;
    calories1D: number;
    fiber1D: number;
    protein1D: number;
    visceralFat1D: number;
  };
}

function MetricRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
          {label}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {value}
        </div>
      </div>
    </div>
  );
}

export function Nutrition({
  metrics = {
    proteinIntake7D: 80,
    fiberIntake7D: 80,
    predictedMealImpactScore: 80,
    averageMealImpactScore: 80,
    fat1D: 80,
    carbs1D: 80,
    netCarbs1D: 80,
    calories1D: 2400,
    fiber1D: 80,
    protein1D: 80,
    visceralFat1D: 80,
  },
}: NutritionProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="nutrition" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Nutrition
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              {/* Header Row */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Data
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Value
                  </div>
                </div>
              </div>

              {/* Metric Rows */}
              <MetricRow
                label="7D Protein intake"
                value={metrics.proteinIntake7D}
              />
              <MetricRow
                label="7D Fiber intake"
                value={metrics.fiberIntake7D}
              />
              <MetricRow
                label="Predicted Meal Impact Score"
                value={metrics.predictedMealImpactScore}
              />
              <MetricRow
                label="Average Meal Impact Score"
                value={metrics.averageMealImpactScore}
              />
              <MetricRow
                label="1D Fat"
                value={metrics.fat1D}
              />
              <MetricRow
                label="1D Carbs"
                value={metrics.carbs1D}
              />
              <MetricRow
                label="1D Net Carbs"
                value={metrics.netCarbs1D}
              />
              <MetricRow
                label="1D Calories"
                value={metrics.calories1D}
              />
              <MetricRow
                label="1D Fiber"
                value={metrics.fiber1D}
              />
              <MetricRow
                label="1D Protein"
                value={metrics.protein1D}
              />
              <MetricRow
                label="1D Visceral Fat"
                value={metrics.visceralFat1D}
              />
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
