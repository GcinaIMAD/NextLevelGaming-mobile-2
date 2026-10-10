import React from 'react';
import { View, Text } from 'react-native';
import { Card, IconBadge, Button, Body } from './UI';
import { colors, spacing } from '../theme';
import { formatRand } from '../utils/fees';
import { useBooking } from '../context/BookingContext';

export default function ItemCard({ item, navigation }) {
  const { qtyOf, addItem } = useBooking();
  const qty = qtyOf(item.id);
  const detailRoute = item.kind === 'package' ? 'PackageDetail' : 'ExperienceDetail';
  const accent = item.kind === 'package' ? colors.blue : colors.purple;
  return (
    <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconBadge name={item.icon} color={accent} />
        <View style={{ flex: 1, marginLeft: spacing.md }}>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '800' }}>{item.name}</Text>
          <Text style={{ color: colors.green, fontSize: 16, fontWeight: '800' }}>{formatRand(item.fee)}</Text>
        </View>
      </View>
      <Body style={{ marginTop: spacing.sm }}>{item.purpose}</Body>
      <View style={{ flexDirection: 'row' }}>
        <Button title="View details" variant="outline" style={{ flex: 1, marginRight: spacing.sm }} onPress={() => navigation.navigate(detailRoute, { id: item.id })} />
        <Button title={qty > 0 ? `Added (${qty}) - add another` : 'Add to booking'} icon="add-circle" style={{ flex: 1.3 }} onPress={() => addItem(item.id)} />
      </View>
    </Card>
  );
} 
