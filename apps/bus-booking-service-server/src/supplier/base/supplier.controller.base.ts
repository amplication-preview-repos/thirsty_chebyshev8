/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SupplierService } from "../supplier.service";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { Supplier } from "./Supplier";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";

export class SupplierControllerBase {
  constructor(protected readonly service: SupplierService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supplier })
  async createSupplier(
    @common.Body() data: SupplierCreateInput
  ): Promise<Supplier> {
    return await this.service.createSupplier({
      data: data,
      select: {
        address: true,
        contactPerson: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Supplier] })
  @ApiNestedQuery(SupplierFindManyArgs)
  async suppliers(@common.Req() request: Request): Promise<Supplier[]> {
    const args = plainToClass(SupplierFindManyArgs, request.query);
    return this.service.suppliers({
      ...args,
      select: {
        address: true,
        contactPerson: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async supplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    const result = await this.service.supplier({
      where: params,
      select: {
        address: true,
        contactPerson: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSupplier(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() data: SupplierUpdateInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.updateSupplier({
        where: params,
        data: data,
        select: {
          address: true,
          contactPerson: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSupplier(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.deleteSupplier({
        where: params,
        select: {
          address: true,
          contactPerson: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  async findBookings(
    @common.Req() request: Request,
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        bookingDate: true,
        createdAt: true,
        customer: true,
        id: true,
        status: true,

        supplier: {
          select: {
            id: true,
          },
        },

        totalAmount: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  async connectBookings(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  async updateBookings(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  async disconnectBookings(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.updateSupplier({
      where: params,
      data,
      select: { id: true },
    });
  }
}