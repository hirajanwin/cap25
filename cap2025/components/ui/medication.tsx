'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';

export function Medication() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="medication" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Medication
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              {/* Headers */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Data
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Value
                  </div>
                </div>
              </div>

              {/* Pre Twin Medications */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Pre Twin Medications
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    4
                  </div>
                </div>
              </div>

              {/* Current Medications */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Current Medications
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    2
                  </div>
                </div>
              </div>

              {/* Medication Changes */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Medication changes
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    1
                  </div>
                </div>
              </div>

              {/* Care Plan Summary */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Care Plan Summary
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    1
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
