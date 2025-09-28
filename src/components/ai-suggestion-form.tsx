'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { getAiSuggestion } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  subscriptionStatus: z.boolean().default(false),
  userInteractionHistory: z.string().min(10, { message: 'Por favor, forneça mais detalhes sobre sua interação.' }),
});

export function AiSuggestionForm() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscriptionStatus: false,
      userInteractionHistory: 'Assisti a vários vídeos, curti várias fotos de conteúdo de praia e interações divertidas.',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSuggestion('');
    const result = await getAiSuggestion(values);
    if (result.success && result.suggestion) {
      setSuggestion(result.suggestion);
    } else {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Desculpe, não consegui encontrar uma sugestão agora. Tente novamente mais tarde.",
      })
    }
    setLoading(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Conteúdo para Você</CardTitle>
        <CardDescription>Receba sugestões de conteúdo com base no seu perfil e interações.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="subscriptionStatus"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Assinante Ativo?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userInteractionHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Histórico de Interação</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva suas interações recentes..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sugerir Conteúdo'}
            </Button>
          </CardContent>
        </form>
      </Form>
      {suggestion && (
        <CardFooter className="flex-col items-start pt-4">
          <div className="w-full rounded-lg border bg-secondary/50 p-4 text-sm">
            <p className="font-bold mb-2">Sugestão para você:</p>
            <p className="text-secondary-foreground/80">{suggestion}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
