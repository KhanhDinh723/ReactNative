import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ProductComponent = () => {
  // State cho sản phẩm điện thoại
  const [product, setProduct] = useState({
    id: '1',
    name: 'THIS IS SCREEN',
    price: 1790000,
    originalPrice: 1990000,
    image: '',
    quantity: 1,
  });

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setProduct(prev => ({ ...prev, quantity: newQuantity }));
    }
  };


  // Tính tổng tiền
  const totalPrice = product.price * product.quantity;

  return (
    <View style={styles.container}>
      {/* Header sản phẩm */}
      <View style={styles.productSection}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
        </View>
        
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.promoText}>Pleas choose your seat</Text>
          <Text style={styles.promoText}>Red is booked | Blue is empty ( empty )</Text>
          
          <View style={styles.priceContainer}>
            
            
          </View>


        </View>
      </View>

      {/* Khuyến mãi */}
      <View style={styles.promoSection}>
        
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>11</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>13</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>14</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButtonx}>
          <Text style={styles.promoButtonText}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>20</Text>
        </TouchableOpacity>



      </View>



      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Click to booking </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  productSection: {
    backgroundColor: 'violet',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    width: '100%',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },

  promoSection: {
    display : 'flex',
    flexWrap : 'wrap',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    flexDirection: 'column',
    gap : 10,
    alignItems: 'center',
    
    flex : 4
    
  },

  promoText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  promoButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  promoButtonx: {
    backgroundColor: '#ee0d0d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  promoButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  totalSection: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
  },
  totalValue: {
    fontSize: 14,
    color: '#333',
  },
  finalTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  finalTotalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  finalTotalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ee0d0d',
  },
  orderButton: {
    backgroundColor: '#ee0d0d',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  orderButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default ProductComponent;