'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';

interface EA1CProps {
  metrics?: {
    preTwinLabA1C: number;
    mostRecentLabHbA1C: number;
    eA1C60DValid: number;
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
    <div className="self-stretch w-full justify-between items-start inline-flex">
      <div className="w-2/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
          {label}
        </div>
      </div>
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {value}
        </div>
      </div>
    </div>
  );
}

export function EA1C({
  metrics = {
    preTwinLabA1C: 9,
    mostRecentLabHbA1C: 8,
    eA1C60DValid: 6,
  },
}: EA1CProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="ea1c" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                eA1C
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              <MetricRow
                label="Pre-Twin Lab A1C"
                value={metrics.preTwinLabA1C}
              />
              <MetricRow
                label="Most recent Lab HbA1C"
                value={metrics.mostRecentLabHbA1C}
              />
              <MetricRow
                label="eA1C 60D Valid"
                value={metrics.eA1C60DValid}
              />
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
