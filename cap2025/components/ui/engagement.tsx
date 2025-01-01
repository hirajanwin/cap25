'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';

interface EngagementProps {
  metrics?: {
    score: {
      sevenDay: number;
      thirtyDay: number;
    };
    mealLog: {
      sevenDay: number;
      thirtyDay: number;
    };
    sensor: {
      sevenDay: number;
      thirtyDay: number;
    };
    action: {
      sevenDay: number;
      thirtyDay: number;
    };
    medLog: {
      sevenDay: number;
      thirtyDay: number;
    };
  };
}

function MetricRow({
  label,
  sevenDay,
  thirtyDay,
}: {
  label: string;
  sevenDay: number;
  thirtyDay: number;
}) {
  return (
    <div className="self-stretch w-full justify-between items-start inline-flex">
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
          {label}
        </div>
      </div>
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {sevenDay}
        </div>
      </div>
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {thirtyDay}
        </div>
      </div>
    </div>
  );
}

export function Engagement({
  metrics = {
    score: { sevenDay: 80, thirtyDay: 90 },
    mealLog: { sevenDay: 80, thirtyDay: 90 },
    sensor: { sevenDay: 80, thirtyDay: 90 },
    action: { sevenDay: 80, thirtyDay: 90 },
    medLog: { sevenDay: 80, thirtyDay: 90 },
  },
}: EngagementProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="engagement" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Engagement
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              {/* Header Row */}
              <div className="self-stretch w-full justify-between items-start inline-flex">
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Engagement
                  </div>
                </div>
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    7 Day Avg.
                  </div>
                </div>
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    30 Day Avg.
                  </div>
                </div>
              </div>

              {/* Metric Rows */}
              <MetricRow
                label="Score"
                sevenDay={metrics.score.sevenDay}
                thirtyDay={metrics.score.thirtyDay}
              />
              <MetricRow
                label="Meal Log"
                sevenDay={metrics.mealLog.sevenDay}
                thirtyDay={metrics.mealLog.thirtyDay}
              />
              <MetricRow
                label="Sensor"
                sevenDay={metrics.sensor.sevenDay}
                thirtyDay={metrics.sensor.thirtyDay}
              />
              <MetricRow
                label="Action"
                sevenDay={metrics.action.sevenDay}
                thirtyDay={metrics.action.thirtyDay}
              />
              <MetricRow
                label="Med Log"
                sevenDay={metrics.medLog.sevenDay}
                thirtyDay={metrics.medLog.thirtyDay}
              />
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
