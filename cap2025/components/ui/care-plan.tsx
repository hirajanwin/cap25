'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';
import { UpArrowIcon } from '../icons/up-arrow-icon';

interface CarePlanMetric {
  lastLabs: number;
  difference: number;
  target: number;
}

interface CarePlanProps {
  metrics?: {
    reduceA1C: CarePlanMetric;
    loseWeight: CarePlanMetric;
    eliminateMeds: CarePlanMetric;
  };
  defaultOpen?: boolean;
}

function MetricRow({
  label,
  data,
}: {
  label: string;
  data: CarePlanMetric;
}) {
  return (
    <div className="self-stretch justify-between items-start inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
          {label}
        </div>
      </div>
      <div className="h-5 justify-end items-center gap-2 flex">
        <div className="text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {data.lastLabs}
        </div>
        <div className="w-14 flex-col justify-start items-end gap-2 inline-flex">
          <div className="px-1 bg-[#ecfcf2] rounded-2xl border border-[#aaefc6] justify-end items-center gap-1 inline-flex">
            <UpArrowIcon />
            <div className="text-center text-[#057647] text-sm font-medium font-['SöhneMono'] leading-tight">
              {data.difference}
            </div>
          </div>
        </div>
        <div className="w-10 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {data.target}
        </div>
      </div>
    </div>
  );
}

export function CarePlan({
  metrics = {
    reduceA1C: {
      lastLabs: 7.2,
      difference: 1.2,
      target: 5.7,
    },
    loseWeight: {
      lastLabs: 258,
      difference: 10,
      target: 248,
    },
    eliminateMeds: {
      lastLabs: 4,
      difference: 2,
      target: 2,
    },
  },
  defaultOpen = false,
}: CarePlanProps) {
  return (
    <Accordion.Root type="single" defaultValue={defaultOpen ? "care-plan" : undefined} collapsible className="w-full">
      <Accordion.Item value="care-plan" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Care Plan
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
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Last Labs
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Target
                  </div>
                </div>
              </div>

              {/* Metric Rows */}
              <MetricRow
                label="Reduce A1C"
                data={metrics.reduceA1C}
              />
              <MetricRow
                label="Lose Weight"
                data={metrics.loseWeight}
              />
              <MetricRow
                label="Eliminate Meds"
                data={metrics.eliminateMeds}
              />
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
