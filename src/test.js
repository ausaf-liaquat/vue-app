 // Discount
        $(document).on('input', '.discount', function() {
            let row = $(this).parent().parent();

            let priceElem = row.find('.price');

            let quantityElem = row.find('.quantity');

            let sum_price = row.find('.sum_price');
            let unitSumPrice = row.find('.unitSumPrice');

            let discountVal = $(this).val() ?? 0;



            let discount = sum_price.val() * (discountVal / 100);

            let netCost = sum_price.val() - discount;

            let unitDiscount = (priceElem.val()) * (discountVal / 100)

            let unitNetCost = (priceElem.val()) - unitDiscount

            let sum_price_quantity = row.find('.sum_price_quantity');
            let unitDiscountedPrice = row.find('.unitDiscountedPrice');

            let dollarSym = row.find('.discountDollarsym');

            if (isNaN(netCost)) {
                row.find('.sum_discount_net_cost').html('')
                dollarSym.html('')
            } else {
                row.find('.sum_discount_net_cost').html(netCost.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        }))
                dollarSym.html('$')
                // console.log('unitCost' , unitNetCost);
                unitDiscountedPrice.html(unitNetCost.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        }))
                unitSumPrice.val(unitNetCost.toFixed(2))
                dollarSym.html('$')
            }

            let sum = 0;
            $('.sum_discount_net_cost').each(function() {

                sum += parseFloat($(this).text().replace(/,/g, ""));

            });

            if (isNaN(sum)) {

                $('.total-quantity-price').text("");
                $('.total_price').val("")
                $('.totalQuotation').html(``)
                $('.taxTD').html('')
            } else {

                $('.total-quantity-price').text('$' + sum.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));
                $('.total_price').val(sum)

                
                let tax = $('.tax').val()
                let TotalTax = parseFloat(tax) * parseFloat(sum) / 100;
                $('.taxTD').html(`$${TotalTax.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}`)
                let total_amount = TotalTax + parseFloat(sum)

                $('.totalQuotation').html(`$${total_amount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}`)
            }
        })
        
        $(document).on('input', '.price', function() {
          
            let row = $(this).parent().parent();
            let priceElem = row.find('.price');
            let quantityElem = row.find('.quantity');
            let productPrice = 0
            if (priceElem) {
                productPrice = parseFloat(priceElem.val())
            }
            var totalprice = 0;
            var price = parseFloat(quantityElem.val()) * productPrice;

            if (price <= 0) {
                $('.total' + priceElem.data('id')).html('-')
                $('.sum_price' + priceElem.data('id')).val(0)
            } else {
                $('.total' + priceElem.data('id')).html('$' + price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }))
                $('#sum_price' + priceElem.data('id')).val(price)
            }


            let unitSumPrice = row.find('.unitSumPrice');
            let unitDiscountedPrice = row.find('.unitDiscountedPrice');

            let sum = 0;
            $('.sum').each(function() {

                sum += +$(this).text().replace('$', '').replace(/,/g, "").replace(/,/g, "") || 0;
            });

            $('.total-price').html('$' + sum.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }))
            $('.total_price').val(sum.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }))

            $('.total_quote_price').val(sum)

            let tax = $('.tax').val()
            let TotalTax = parseFloat(tax) * parseFloat(sum) / 100;

            @if (!$isEdit)
                $('.taxTD').html(`$${TotalTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                })}`)
                let total_amount = parseFloat(TotalTax + parseFloat(sum))
            @else
                @if ($quotation->status == 3)
                    $('.taxTD').html(`$${TotalTax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                })}`)
                    let total_amount = parseFloat(TotalTax + parseFloat(sum))
                @else
                    $('.taxTD').html(`$${parseFloat(tax).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                })}`)
                    let total_amount = parseFloat(parseFloat(tax) + parseFloat(sum))
                @endif
            @endif

            $('.totalQuotation').html(`$${total_amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
            })}`)

            $('.discount').trigger('input');
        })

        $(document).on('input', '.quantity', function() {
            let row = $(this).parent().parent();
            let priceElem = row.find('.price');
            let quantityElem = row.find('.quantity');
            let sum_price_quantity = row.find('.sum_price_quantity');
            let sum_price = row.find('.sum_price');

            let unitSumPrice = row.find('.unitSumPrice');
            let unitDiscountedPrice = row.find('.unitDiscountedPrice');

            var totalprice = 0;
            var price = parseFloat(quantityElem.val()) * parseFloat(priceElem.val());


            let dollarSym = row.find('.dollar_sym');
            if (isNaN(price)) {
                sum_price_quantity.html('')
                dollarSym.html('')
                unitDiscountedPrice.html('')
                dollarSym.html('')
            } else {
                sum_price_quantity.html(price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }))
                sum_price.val(price)

                unitDiscountedPrice.html(price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }))
                unitSumPrice.val(price)
                dollarSym.html('$')

            }
            let sum = 0;
            $('.sum_discount_net_cost').each(function() {

                sum += parseFloat($(this).text().replace(/,/g, ""));

            });

            if (isNaN(sum)) {
                $('.total-quantity-price').text("");
                $('.total_price').val("")
                $('.totalQuotation').html(``)
                $('.taxTD').html('')
            } else {

                $('.total-quantity-price').text('$' + sum.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }));
                $('.total_price').val(sum)

                // $tax = ($quotation->amount * $quotation->vendor->sales_tax_percentage) / 100;
                let tax = $('.tax').val()
                let TotalTax = parseFloat(tax) * parseFloat(sum) / 100;
                $('.taxTD').html(`$${TotalTax.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}`)
                let total_amount = TotalTax + parseFloat(sum)

                $('.totalQuotation').html(`$${total_amount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        })}`)
            }
            $('.price').trigger('input');

        });
// dasdasdasd

        function updateRowCalculations(row) {
            let priceElem = row.find('.price');
            let quantityElem = row.find('.quantity');
            let discountElem = row.find('.discount');
            let sumPriceElem = row.find('.sum_price');
            let unitSumPriceElem = row.find('.unitSumPrice');
            let unitDiscountedPriceElem = row.find('.unitDiscountedPrice');
            let sumDiscountNetCostElem = row.find('.sum_discount_net_cost');
            let dollarSymElem = row.find('.discountDollarsym');
        
            let price = parseFloat(priceElem.val()) || 0;
            let quantity = parseFloat(quantityElem.val()) || 0;
            let discount = parseFloat(discountElem.val()) || 0;
        
            let totalPrice = quantity * price;
            let discountAmount = totalPrice * (discount / 100);
            let netCost = totalPrice - discountAmount;
            let unitDiscount = price * (discount / 100);
            let unitNetCost = price - unitDiscount;
        
            sumPriceElem.val(totalPrice.toFixed(2));
            unitSumPriceElem.val(unitNetCost.toFixed(2));
        
            if (isNaN(netCost)) {
                sumDiscountNetCostElem.html('');
                dollarSymElem.html('');
            } else {
                sumDiscountNetCostElem.html(netCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }));
                dollarSymElem.html('$');
                unitDiscountedPriceElem.html(unitNetCost.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }));
                dollarSymElem.html('$');
            }
        
            updateTotalCalculations();
        }
        
        function updateTotalCalculations() {
            let sum = 0;
            $('.sum_discount_net_cost').each(function() {
                sum += parseFloat($(this).text().replace(/,/g, '')) || 0;
            });
        
            if (!isNaN(sum)) {
                $('.total-quantity-price').text('$' + sum.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }));
                $('.total_price').val(sum);
        
                let tax = $('.tax').val();
                let TotalTax = parseFloat(tax) * parseFloat(sum) / 100;
                $('.taxTD').html(`$${TotalTax.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}`);
                let total_amount = TotalTax + parseFloat(sum);
                $('.totalQuotation').html(`$${total_amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}`);
            } else {
                $('.total-quantity-price').text('');
                $('.total_price').val('');
                $('.totalQuotation').html('');
                $('.taxTD').html('');
            }
        }
        
        $(document).on('input', '.discount', function() {
            let row = $(this).parent().parent();
            updateRowCalculations(row);
        });
        
        $(document).on('input', '.price', function() {
            let row = $(this).parent().parent();
            updateRowCalculations(row);
        });
        
        $(document).on('input', '.quantity', function() {
            let row = $(this).parent().parent();
            updateRowCalculations(row);
        });
        
        // Initial calculation when the page loads
        updateTotalCalculations();