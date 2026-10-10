import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Screen, Card, IconBadge, Heading, Body, Button } from './UI';
import { colors, spacing } from '../theme';
import { formatRand } from '../utils/fees';
import { findItem } from '../data/catalog';
import { useBooking } from '../context/BookingContext';

export default function ItemDetail({ route, navigation }) {
  const item = findItem(route.params.id);
  const { qtyOf, addItem } = useBooking();
  const qty = qtyOf(item.id);
  const accent = item.kind === 'package' ? colors.blue : colors.purple;
  return (
    <Screen>
      <Card style={{ borderColor: accent }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconBadge name={item.icon} color={accent} size={30} />
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: '800' }}>{item.name}</Text>
            <Text style={{ color: colors.green, fontSize: 20, fontWeight: '800' }}>{formatRand(item.fee)}</Text>
          </View>
        </View>
        <Body style={{ marginTop: spacing.md }}>{item.purpose}</Body>
      </Card>

      <Heading>What's included</Heading>
      <Card>
        {item.includes.map((line) => (
          <View key={line} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6 }}>
            <Ionicons name="checkmark-circle" size={20} color={colors.green} />
            <Text style={{ color: colors.text, marginLeft: spacing.sm, fontSize: 15 }}>{line}</Text>
          </View>
        ))}
      </Card>

      <Button title={qty > 0 ? `Added (${qty}) - add another` : 'Add to booking'} icon="add-circle" onPress={() => addItem(item.id)} />
      {qty > 0 ? <Button title="Calculate fees" variant="outline" icon="calculator" onPress={() => navigation.navigate('Main', { screen: 'Fees' })} /> : null}
    </Screen>
  );
} 
