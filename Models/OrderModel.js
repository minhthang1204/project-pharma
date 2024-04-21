import mongoose from "mongoose";
const statusSchema = mongoose.Schema({
  level: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    orderItems: [
      {
        drugstoreId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "DrugStore",
        },
        _id: false,
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: Array, required: true },
        price: { type: Number, required: true },
        refunded: { type: Number },
        discount: { type: Number },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        detailStock: [
          {
            _id: false,
            lotNumber: { type: String, require: true },
            expDrug: { type: Date, require: true },
            count: { type: Number, require: true, default: 0 },
            priority: { type: Number, require: true, default: 0 },
          },
        ],
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "Paypal",
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    }, //itemsPrice
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    discountPoint: {
      type: Number,
      required: true,
      default: 0.0,
    },

    cancellationDeadline: {
      type: Date,
    },
    status: [statusSchema],
    isCanceled: {
      type: Boolean,
      required: true,
      default: false,
    },
    isSuccess: {
      type: Boolean,
      required: true,
      default: false,
    },
    isComformed: {
      type: Boolean,
      required: true,
      default: false,
    },
    isReceived: {
      type: Boolean,
      required: true,
      default: false,
    },
    totalPoints: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    conformedAt: {
      type: Date,
    },
    canceledAt: {
      type: Date,
    },
    receivedAt: {
      type: Date,
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
